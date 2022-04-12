import React from "react";
import { Box, Flex, HStack, Text, Button } from "@chakra-ui/react";
import CircleIconButton from "./CircleIconButton";
import { FaTwitter, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import FooterImg from "../../public/team-bg.jpg";
import styles from "../../pages/styles/home.module.css";

const Footer = ({}) => {
	return (
		<Box
			w="100%"
			h="60vw"
			maxH="800px"
			position="relative"
			className={styles.imageBg}
			backgroundImage={FooterImg.src}
		>
			<Box
				position="absolute"
				left="3%"
				right="3%"
				bottom="30px"
				py="16px"
				borderTop="1px solid #265176"
				fontSize="14px"
				color="#75A7D3"
			>
				<Flex justifyContent="space-between" alignItems="center">
					<Box>© Classic Rewards. All rights reserved.</Box>
					<Flex justifyContent="center" flexDirection={["column", "column", "column", "row"]} >
						<Text textStyle="paragraph" maxW={["500", , , , "600"]} fontSize={["18px", , , , "20px"]} mr={2}>Binance NFT Contract</Text>
						<Box>
							<Button
								align="center"
								color="#C66CFF"
								border="1px solid #C66CFF"
								backgroundColor="#0B3552"
								w="90%"
								h="30px"
								onClick={() => navigator.clipboard.writeText("0x288F79cd26AaebCB3dd80f8FDb6904c8b1dBea74")}
							>
								click to copy
							</Button>
						</Box>
					</Flex>
					<HStack gap={1}>
						<CircleIconButton
							icon={FaTwitter}
							size="28px"
							href="https://twitter.com/ClassicRewards"
						/>
						<CircleIconButton
							icon={FaTelegramPlane}
							size="28px"
							href="https://t.me/+oo-kjTs-jkAyZDU5"
						/>
						<CircleIconButton
							icon={FaYoutube}
							size="28px"
							href="https://www.youtube.com/c/PatientMoney"
						/>
					</HStack>
				</Flex>
			</Box>
		</Box>
	);
};

export default Footer;
