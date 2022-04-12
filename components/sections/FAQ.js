import { Box, Container, Accordion } from "@chakra-ui/react";
import FAQItem from "./FAQItem";

export default function Faq() {
	return (
		<Container w="98%" maxW="800px" mt={12} centerContent>
			<Box id="faqs" w="100%">
				<Accordion allowToggle>
					<FAQItem
						title="In what order will the NFT’s be launched?"
						body="Binance, Ethereum Classic, Ethereum"
					/>
					<FAQItem
						title="When will the game be ready to play?"
						body="The game is being built and we are on track to release it according to our road map."
					/>
					<FAQItem
						title="What is the difference between the Classic Rewards Token and the NFT’s?"
						body="The Classic Reward Token will fuel our Stamford Skirmish game and the NFT’s will be the characters used in this game. There will be tournaments with significant winnings at stake and participants will need characters in order to participate."
					/>
					<FAQItem
						title="How can I buy Classic Reward Token or Mint NFT’s?"
						body="Initially, you will need to connect your wallet to Binance Smart Chain network (Now BNBchain). When our Ethereum Classic NFT’s are ready to mint, you will need to connect your wallet to the Ethereum Classic network."
					/>
					<FAQItem title="Is this a Play-To-Earn game?" body="Yes it is." />
					<FAQItem
						title="When can I sell my NFT’s"
						body="The marketplace will open soon after the NFT’s are minted."
					/>
					<FAQItem title="Can I set any price for my NFT?" body="Yes you can." />
				</Accordion>
			</Box>
		</Container>
	);
}
