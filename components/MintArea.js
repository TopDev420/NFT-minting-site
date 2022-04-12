import { useEffect, useState } from "react";
import { ethers } from "ethers";
import keccak256 from "keccak256";
import MerkleTree from "merkletreejs";
import { Center, Input, Button, Box, Heading, Text } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import ReactLoading from "react-loading";
import "react-toastify/dist/ReactToastify.css";

export function MintArea({ contract }) {
  const [amount, setAmount] = useState(1);
  const [mintMore, setMintMore] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [presaleEnd, setPresaleEnd] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(null);
  const [loadingTx, setLoadingTx] = useState(false);
  // console.log("State: ", isPaused, presaleEnd);

  const MAX_SUPPLY = 6000;

  useEffect(() => {
    (async () => {
      // console.log("CONTRACT: ", contract);
      if (contract) {
        try {
          const _isPaused = await contract.paused();
          setIsPaused(_isPaused);
        } catch (e) {
          // alert("TODO message");
          console.log("Error: ", e);
        }

        try {
          const _presale = await contract.presaleEnd();
          // console.log(Number(_presale) * 1000);
          // console.log(new Date().getTime());
          setPresaleEnd(Number(_presale) * 1000);
        } catch (e) {
          // alert("TODO message");
          console.log("Error: ", e);
        }

        try {
          const _total = await contract.totalSupply();
          setTotalSupply(Number(_total));
        } catch (e) {
          // alert("TODO message");
          console.log("Error: ", e);
        }
      }
    })();
  }, [contract, loadingTx]);

  useEffect(
    () =>
      (async () => {
        const contractsPrice = await contract?.tokenPrice();
        setTokenPrice(contractsPrice);
      })(),
    [contract]
  );

  return (
    <>
      <ToastContainer />
      <Center
        h="100%"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {!contract && (
          <Text
            textStyle="paragraph"
            maxW={["500", , , , "600"]}
            fontSize={["18px", , , , "20px"]}
            mt={4}
          >
            Connect your wallet!
          </Text>
        )}
        <Box
          bg="linear-gradient(180deg, #362073, #190d35)"
          style={{
            boxShadow:
              "0 20px 20px rgba(66, 32, 111, 0.2), 0px 0px 50px rgba(66, 32, 111, 0.3)",
            borderRadius: "0.8rem",
            width: "330px",
            height: "230px",
          }}
        >
          <Center
            h="100%"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Heading
              as="h1"
              fontSize={["48px", , , , "60px"]}
              color="#C66CFF"
              style={{ marginBottom: "3rem" }}
            >
              {contract ? totalSupply : "--"} / {MAX_SUPPLY}
            </Heading>
            <Box style={{ marginBottom: "10px" }}>
              <Input
                value={amount}
                onChange={handleInput}
                focusBorderColor="#C66CFF"
                placeholder="1"
                type="number"
                w="70px"
                h="50px"
                style={{ marginRight: "0.6rem", textAlign: "center" }}
              />
              <Button
                align="center"
                color="#C66CFF"
                border="1px solid #C66CFF"
                backgroundColor="#0B3552"
                w="100px"
                h="50px"
                onClick={() => onMint(amount)}
                disabled={
                  isPaused ||
                  contract == null ||
                  totalSupply === MAX_SUPPLY ||
                  amount > 25
                }
              >
                {mintMore ? "MINT MORE" : "MINT"}
              </Button>
            </Box>
            {loadingTx && (
              <ReactLoading
                type={"spin"}
                color={"#C66CFF"}
                height={"10%"}
                width={"10%"}
              />
            )}
          </Center>
          <Text color="red" fontSize="md">
            Max 25 tokens!
          </Text>
        </Box>
      </Center>
    </>
  );

  async function onMint(amount) {
    if (Number(amount) <= 0 || Number(amount) + totalSupply > MAX_SUPPLY) {
      toast.error("Not valid Amount", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    try {
      setLoadingTx(true);
      const currentTimestamp = new Date().getTime();

      const tx =
        currentTimestamp <= presaleEnd
          ? await presaleMint()
          : await publicMint();

      setAmount(1);
      const receipt = await tx.wait();
      setLoadingTx(false);

      if (receipt.status === 1) {
        console.log("transaction completed!");
        setMintMore(true);
      } else {
        console.log("transaction failed!");
      }

      let mintedAmount = await contract.totalSupply();
      setTotalSupply(Number(mintedAmount));
    } catch (error) {
      setLoadingTx(false);
      let errorMsg = error.hasOwnProperty("error") ? error.error : error;
      errorMsg = errorMsg.hasOwnProperty("data")
        ? errorMsg.data.hasOwnProperty("originalError")
          ? errorMsg.message
          : error.data.message
        : errorMsg.message;
      if (
        errorMsg.indexOf("err: insufficient funds for gas * price + value:") !==
        -1
      )
        errorMsg = "Insufficient Funds";
      console.log(errorMsg);
      toast.error(errorMsg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  async function presaleMint() {
    let amount_ = await ethers.BigNumber.from(amount);

    let errorMargin = ethers.utils.parseUnits(String(30000 * amount), "wei");
    let estimateGas = await contract.estimateGas.presaleMint(
      amount,
      getRandomNumber(),
      {
        value: tokenPrice.mul(amount_),
      }
    );

    // console.log("gasEstimation: ", ethers.utils.formatUnits(estimateGas, 9));
    // console.log("errorMargin: ", ethers.utils.formatUnits(errorMargin, 9));

    return await contract.presaleMint(amount, getRandomNumber(), {
      value: tokenPrice.mul(amount_),
      gasLimit: estimateGas.add(errorMargin),
    });
  }

  async function publicMint() {
    let amount_ = await ethers.BigNumber.from(amount);

    let errorMargin = ethers.utils.parseUnits(String(30000 * amount), "wei");
    let estimateGas = await contract.estimateGas.publicMint(
      amount,
      getRandomNumber(),
      {
        value: tokenPrice.mul(amount_),
      }
    );

    // console.log("gasEstimation: ", ethers.utils.formatUnits(estimateGas, 9));
    // console.log("errorMargin: ", ethers.utils.formatUnits(errorMargin, 9));

    return await contract.publicMint(amount, getRandomNumber(), {
      value: tokenPrice.mul(amount_),
      gasLimit: estimateGas.add(errorMargin),
    });
  }

  function handleInput(event) {
    const value = event.target.value;
    setAmount(value);
  }

  // function handleWhitelistFile(data, fileInfo) {
  //   const content = JSON.stringify(data);
  //   console.log(data);
  //   console.log(fileInfo);
  // }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 1000000);
}
