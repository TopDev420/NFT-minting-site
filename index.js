import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { useIsMounted } from "usehooks-ts";
import {
  Box,
  Container,
  Heading,
  Flex,
  Text,
  UnorderedList,
  ListItem,
  Circle,
  Center,
  AspectRatio,
  Stack,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import FAQ from "../components/sections/FAQ";
import TeamMember from "../components/team/TeamMember";
import { FaTwitter } from "react-icons/fa";
import BGSection1 from "../public/section1-bg.jpg";
import BGSection2 from "../public/section2-bg.jpg";
import BGSection3 from "../public/section3-bg.jpg";
import styles from "./styles/home.module.css";
import { MintArea } from "../components/MintArea";
// import { connectHandler } from '../utils/connectHandler';

export default function Home({ contract }) {
  const isMounted = useIsMounted();
  const imagesVisible = useBreakpointValue({ base: false, lg: true });
  const iconsVisible = useBreakpointValue({ base: false, md: true });
  const bgVideo = useRef();

  useEffect(() => {
    bgVideo.current?.play();
  }, []);

  if (!isMounted()) return null;

  return (
    <>
      <Box id="home" w="100%" h="100vh" bg="#0B3552" position="relative">
        <video
          playsInline
          autoPlay
          muted
          loop
          poster="/video-poster.jpg"
          className={`${styles.bgVideo} ${styles.mobile}`}
          ref={bgVideo}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <Box
          position="absolute"
          left={["initial", , , "10vw"]}
          top={["160px", , , "40%"]}
          px={["5%", , , "0"]}
          transform={["initial", , , "translateY(-50%)"]}
        >
          <Heading size="xl" fontSize={["32px", , , , "42px"]}>
            BNBchain + Ethereum Classic P2E
          </Heading>
          <Heading size="2xl" fontSize={["48px", , , , "60px"]} color="#C66CFF">
            MINT ON APRIL 2nd
          </Heading>
          <Text
            textStyle="paragraph"
            maxW={["500", , , , "600"]}
            fontSize={["18px", , , , "20px"]}
            mt={4}
          >
            The first 1,000 NFT’s to be minted will be airdropped Classic Rewards tokens after the launch of our token.
            <br /> The first 6000 NFT’s are available for minting and you get a random NFT each time you'll mint.
            card game.
          </Text>
        </Box>

        <Box
          position="absolute"
          right={["50%", , , "10%"]}
          transform={["translateX(50%)", , , "initial"]}
          bottom="3%"
          w="250px"
          h="180px"
          zIndex={30}
        >
          <Image src="/cr-banner.png" alt="Classic Rewards" layout="fill" />
        </Box>
      </Box>

      <Box
        id="mint"
        w="100%"
        h="100vh"
        py={[12, 16, 20, 24]}
        className={styles.imageBg}
        backgroundImage={BGSection3.src}
      >
        <MintArea contract={contract} />
      </Box>

      <Box
        id="battle"
        w="100%"
        h={["auto", , , , "630px"]}
        py={[12, 16, 20, 24, 0]}
        className={styles.imageBg}
        backgroundImage={BGSection1.src}
        position="relative"
        overflow="hidden"
      >
        <Stack
          direction={["column", , , "row"]}
          align="center"
          gap={6}
          h="100%"
        >
          {imagesVisible && (
            <Box flex="1 1" h="100%" position="relative">
              <AspectRatio
                ratio={1178 / 1400}
                top="60px"
                minW="650px"
                right="0"
                position="absolute"
              >
                <Image src="/knight.png" layout="fill" alt="Knight" />
              </AspectRatio>
            </Box>
          )}
          <Box
            flex="1 1"
            minW={["initial", , , "50%"]}
            maxW={["90%", , , "50%"]}
            marginLeft={["0", , , "5%", "0%"]}
            position="relative"
          >
            <Heading as="h2" fontSize={["30px", , , , "42px"]}>
              YOUR NFT
            </Heading>
            <Heading as="h1" fontSize={["48px", , , , "60px"]} color="#C66CFF">
              CARD HEROES
            </Heading>
            <Text
              textStyle="paragraph"
              maxW="750"
              fontSize={["16px", "18px", , "20px"]}
              mt={4}
            >
              Each of our five NFT game characters, Archer, Gladiator,
              Mercenary, Monk and Knight has five levels represented by stars.
              Our 5 star level characters are the rarest. Each character has
              only 200 existing five star instances. As the stars reduce, the
              number of instances increase. For example, there are 600 one star
              NFT&apos;s for each character.
            </Text>
          </Box>
          <Box
            flex="1 0"
            maxW={["90%", , , , "430px"]}
            minW={[, , , , "430px"]}
            pr={[, , , "20px"]}
          >
            <AspectRatio
              ratio={1}
              maxW="340"
              minW={["260", "280", , "0", "340"]}
              borderRadius={20}
              overflow="hidden"
              filter="drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.75))"
              border="3px solid #461B7B"
            >
              {/* <Image src="/nft-video.jpg" layout="fill" alt="NFTs" /> */}
              <video
                playsInline
                autoPlay
                muted
                loop
                poster="/nft-loop-placeholder.jpg"
                className={styles.bgVideo}
              >
                <source src="/nft-loop-2.mp4" type="video/mp4" />
              </video>
            </AspectRatio>
          </Box>
        </Stack>
      </Box>

      <Box
        w="100%"
        h={["auto", , , , "650px"]}
        position="relative"
        py={[12, 16, 20, 24]}
        className={styles.imageBg}
        backgroundImage={BGSection2.src}
      >
        <Box
          position={["relative", , , , "absolute"]}
          left={["initial", , , , "10%"]}
          top={["initial", , , , "50%"]}
          transform={["", , , , "translateY(-50%)"]}
          w={["90%", , , , "auto"]}
          maxW="600px"
          mx="auto"
        >
          <Heading as="h2" fontSize={["48px", , "60px"]} display="inline">
            10,000{" "}
          </Heading>
          <Heading
            as="h1"
            fontSize={["36px", , "42px"]}
            color="#C66CFF"
            display="inline"
          >
            UNIQUE NFTs
          </Heading>
          <Box textStyle="paragraph" fontSize={["16px", "18px", , "20px"]}>
            <Text mt={4}>
              60% of our 10,000 NFT’s will be available for early minting. These
              will be at a flat rate of 0.25 BNB. The other 40% will be split between
              game rewards, marketing/community events, and development costs.
            </Text>
            <Text mt={4}>
              Each character has unique metadata which comprises attack,
              defense, and grit. In the game Stamford Skirmish, these attributes
              may change depending on which other characters you pair them with
              within Stamford Skirmish.
            </Text>
          </Box>
        </Box>
        {imagesVisible && (
          <Box
            h="850px"
            w="600px"
            position="absolute"
            right="50px"
            top="-120px"
          >
            <AspectRatio
              ratio={674 / 1300}
              minW="450px"
              position="absolute"
              right={["-30%", , , , , "30px"]}
            >
              <Image
                src="/monk.png"
                width="450"
                height="868"
                layout="fill"
                alt="Monk"
              />
            </AspectRatio>
          </Box>
        )}
      </Box>

      <Box
        id="lore"
        w="100%"
        py={[12, 16, 20, 24]}
        className={styles.imageBg}
        backgroundImage={BGSection3.src}
      >
        <Heading
          as="h2"
          fontSize={["42px", , "60px"]}
          className={styles.sectionTitle}
        >
          LORE
        </Heading>
        <Container
          zIndex={2}
          maxW="600"
          textStyle="paragraph"
          fontSize={["16px", "18px", , "20px"]}
          px={["20px", "30px", "40px", "0"]}
        >
          <Text mt={[6, 8, , 16]}>
            Long ago, the kingdom of Crocaea rose from the chaos engulfing the
            continent of Dormagia. A beacon of prosperity in a land of betrayal,
            opportunism, and petty squabbles, Crocaea found wealth and
            protection from its fortunate position along the western coast. As
            perpetual war raged on throughout the land of Dormagia, Crocaea
            sought to fortify its defenses, digging a massive moat dividing
            itself from the rest of Dormagia.
          </Text>
          <Text mt={4}>
            For years, Crocaea existed relatively unscathed by the constant
            conflict around them. The Stamford Bridge, under constant watch of
            the Crocaean Sentinels, has remained as the only channel of foot
            travel available to the outside world. The barriers surrounding
            Crocaea left the people faithful that their kingdom was impervious
            to outside forces. Comfortable in this belief, no one believed chaos
            could creep into the kingdom…
          </Text>
          <Text mt={4}>
            One day, a caravan of merchants from Eredane made their way over the
            Stamford Bridge. They brought with them an unintentional import:
            abundant pestilence. The disease spread rapidly through the city,
            reaching as far as the royal family.
          </Text>
          <Text mt={4}>
            News of Crocaea&apos;s sudden vulnerability reached all of Dormagia
            within days. Though the specter of disease engulfed the kingdom, the
            warring nations recognized this as their only opportunity to claim
            this vital land. Decimated by disease, the Crocaean Sentinels
            imposing force no longer watched over Stamford Bridge, instead lying
            under the amateur eye of an impromptu militia.
          </Text>
          <Text mt={4}>
            The path to power and prosperity has been swung open. The gauntlet
            has been thrown. Many will fight for the chance to claim Crocaea.
            Will you emerge the victor, or the fallen?
          </Text>
        </Container>
      </Box>

      <Box
        id="roadmap"
        w="100%"
        py={24}
        bgGradient="linear(to-b, #180C38, #071025)"
        position="relative"
      >
        <Heading as="h2" size="xl" className={styles.sectionTitle}>
          ROADMAP
        </Heading>
        {imagesVisible && (
          <>
            <Box
              h="850px"
              w="600px"
              position="absolute"
              right="0"
              top="-245px"
              zIndex="5"
            >
              <AspectRatio ratio={1200 / 1369} minW="750px" position="absolute">
                <Image
                  src="/mercenary2.png"
                  width="750"
                  height="840"
                  layout="fill"
                  alt="Monk"
                />
              </AspectRatio>
            </Box>
            <Box
              h="850px"
              w="600px"
              position="absolute"
              left="0"
              top="570px"
              zIndex="4"
            >
              <AspectRatio ratio={800 / 1365} minW="500px" position="absolute">
                <Image
                  src="/gladiator.png"
                  width="500"
                  height="1023"
                  layout="fill"
                  alt="Monk"
                />
              </AspectRatio>
            </Box>
          </>
        )}
        <Box
          w="94%"
          maxW={["420px", , , , "860px"]}
          mx="auto"
          mt={24}
          position="relative"
        >
          {!imagesVisible && (
            <Box
              w="6px"
              bg="#362073"
              position="absolute"
              top="100px"
              bottom="100px"
              left="calc(50% - 3px)"
              zIndex={0}
            />
          )}

          <Box mb={[16, , , 36]} position="relative">
            <Box
              bg="linear-gradient(180deg, #42206F, #190d35)"
              rounded="40px"
              py={["30px", , , , "45px"]}
              px={["30px", , , , "55px"]}
              display="inline-block"
              minW={["90%", , , , "420px"]}
              maxW={["100%", , , , "420px"]}
              w={["100%", , , , "auto"]}
              boxSizing="border-box"
              position="relative"
            >
              {imagesVisible && (
                <>
                  <Box
                    w="6px"
                    bg="#362073"
                    position="absolute"
                    bottom="-75px"
                    left="50%"
                    height="75px"
                    zIndex={2}
                    borderBottomLeftRadius={6}
                  />
                  <Box
                    w="436px"
                    h="6px"
                    bg="#362073"
                    position="absolute"
                    bottom="-75px"
                    left="calc(50% + 6px)"
                    zIndex={2}
                  />
                  <Box
                    w="6px"
                    bg="#362073"
                    position="absolute"
                    bottom="-145px"
                    left="calc(50% + 440px)"
                    height="75px"
                    borderTopRightRadius={6}
                    zIndex={2}
                  />
                </>
              )}
              {iconsVisible && (
                <Circle
                  size={["110", , , , "210"]}
                  bg="#180C38"
                  position="absolute"
                  top={["-45px", , , , "-45px"]}
                  right={["-25px", , , , "-85px"]}
                >
                  <Image
                    src="/phase1-icon.svg"
                    width="105px"
                    height="142px"
                    alt="Phase 1"
                  />
                </Circle>
              )}
              <Heading
                fontSize={["32px", , "42px"]}
                mb={4}
                pb={4}
                borderBottom="1px dashed rgba(255,255,255,.2)"
              >
                PHASE 1
              </Heading>
              <UnorderedList
                spacing={[2, , 3]}
                textStyle="paragraph"
                fontSize={["16px", , "20px"]}
              >
                <ListItem>Social Media presence</ListItem>
                <ListItem>Twitter/Telegram/Medium</ListItem>
                <ListItem>Website/Whitepaper</ListItem>
                <ListItem>Early Minting Binance (60%)</ListItem>
                <ListItem>Ethereum Classic Minting</ListItem>
                <ListItem>Marketplace</ListItem>
              </UnorderedList>
            </Box>
          </Box>

          <Box mb={[16, , , 36]} textAlign="right">
            <Box
              bg="linear-gradient(180deg,  #0c2f5d, #0c1932)"
              rounded="40px"
              py={["30px", , , , "45px"]}
              px={["30px", , , , "55px"]}
              display="inline-block"
              minW={["90%", , , , "420px"]}
              maxW={["100%", , , , "420px"]}
              w={["100%", , , , "auto"]}
              boxSizing="border-box"
              textAlign="right"
              position="relative"
            >
              {imagesVisible && (
                <>
                  <Box
                    w="6px"
                    bg="#362073"
                    position="absolute"
                    bottom="-75px"
                    right="calc(50% - 6px)"
                    height="75px"
                    zIndex={2}
                    borderBottomRightRadius={6}
                  />
                  <Box
                    w="436px"
                    h="6px"
                    bg="#362073"
                    position="absolute"
                    bottom="-75px"
                    right="50%"
                    zIndex={2}
                  />
                  <Box
                    w="6px"
                    bg="#362073"
                    position="absolute"
                    bottom="-144px"
                    right="calc(50% + 434px)"
                    height="75px"
                    borderTopLeftRadius={6}
                    zIndex={2}
                  />
                </>
              )}
              {iconsVisible && (
                <Circle
                  size={["110", , , , "210"]}
                  bg="#180C38"
                  position="absolute"
                  top={["-45px", , , , "-45px"]}
                  left={["-25px", , , , "-85px"]}
                >
                  <Image
                    src="/phase2-icon.svg"
                    width="152px"
                    height="160px"
                    alt="Phase 2"
                  />
                </Circle>
              )}
              <Heading
                fontSize={["32px", , "42px"]}
                mb={4}
                pb={4}
                borderBottom="1px dashed rgba(255,255,255,.2)"
              >
                PHASE 2
              </Heading>
              <UnorderedList
                spacing={[2, , 3]}
                dir="rtl"
                textStyle="paragraph"
                fontSize={["16px", , "20px"]}
              >
                <ListItem>Game Demo</ListItem>
                <ListItem>Classic Rewards Token Presale</ListItem>
                <ListItem>Classic Rewards Token Launch</ListItem>
                <ListItem>Game Beta testing</ListItem>
                <ListItem>Game Release</ListItem>
              </UnorderedList>
            </Box>
          </Box>

          <Box>
            <Box
              bg="linear-gradient(180deg, #a121ca, #1c0f34)"
              rounded="40px"
              py={["30px", , , , "45px"]}
              px={["30px", , , , "55px"]}
              display="inline-block"
              minW={["90%", , , , "420px"]}
              maxW={["100%", , , , "420px"]}
              w={["100%", , , , "auto"]}
              boxSizing="border-box"
              position="relative"
            >
              {iconsVisible && (
                <Circle
                  size={["110", , , , "210"]}
                  bg="#180C38"
                  position="absolute"
                  top={["-45px", , , , "-45px"]}
                  right={["-25px", , , , "-85px"]}
                >
                  <Image
                    src="/phase3-icon.svg"
                    width="170px"
                    height="170px"
                    alt="Phase 3"
                  />
                </Circle>
              )}
              <Heading
                fontSize={["32px", , "42px"]}
                mb={4}
                pb={4}
                borderBottom="1px dashed rgba(255,255,255,.2)"
              >
                PHASE 3
              </Heading>
              <UnorderedList
                spacing={[2, , 3]}
                textStyle="paragraph"
                fontSize={["16px", , "20px"]}
              >
                <ListItem>Free Game Play</ListItem>
                <ListItem>Play-To-Earn Implementation</ListItem>
                <ListItem>Tournament Implementation</ListItem>
                <ListItem>NFT Renting</ListItem>
                <ListItem>The next steps.... Ethereum/Polygon/Harmony</ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        id="team"
        w="100%"
        py={[12, 16, 20, 24]}
        bg="linear-gradient(180deg, #081A3D 0%, #0D3150 100%);"
      >
        <Heading
          as="h2"
          size="xl"
          color="#71A7D7"
          className={styles.sectionTitle}
        >
          THE TEAM
        </Heading>
        <Center mt={20}>
          <Flex
            maxW={["90%", , "640px", "1000px"]}
            flexWrap="wrap"
            justifyContent={"center"}
            alignItems="flex-start"
          >
            <TeamMember
              imgSrc="/selorm_dzaka.jpg"
              name="SELORM"
              lastname="DZAKA"
              description="CEO"
              icon={FaTwitter}
              link="https://twitter.com/MoonTigerSt"
            />
            <TeamMember
              imgSrc="/chris_barsis.jpg"
              name="CHRIS"
              lastname="BARSIS"
              description="Marketing, Game theory, R&D"
            />
            <TeamMember
              imgSrc="/alexander_huff.jpg"
              name="ALEXANDER"
              lastname="HUFF"
              description="Game design, Lore"
            />
            <TeamMember
              imgSrc="/vanessa_carey.jpg"
              name="ThatCryptoGirl"
              lastname=""
              description="Social Media Community Manager/Influencer Marketing"
            />
            <TeamMember
              imgSrc="/crypto-prophet.svg"
              name="CRYPTO"
              lastname="PROPHET"
              description="Founding member, Strategic Business Analyst"
            />
            <TeamMember
              imgSrc="/code-is-law.svg"
              name="CODE IS"
              lastname="LAW"
              description="Marketing"
            />
            <TeamMember
              imgSrc="/dev-squad.svg"
              name="DEV"
              lastname="SQUAD"
              description="Everything development related"
            />
          </Flex>
        </Center>
      </Box>

      <Box
        id="faq"
        w="100%"
        py={[12, 16, 20, 24]}
        bg="linear-gradient(180deg, #000 0%, #0D3150 100%);"
      >
        <Heading
          as="h2"
          size="xl"
          color="#71A7D7"
          className={styles.sectionTitle}
        >
          FAQ
        </Heading>
        <FAQ />
      </Box>
    </>
  );
}
