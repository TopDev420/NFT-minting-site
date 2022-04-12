import React from "react";
import {
	Box,
	Text,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";

const FOCUS_STYLE = { boxShadow: "none" };
const HOVER_STYLE = { backgroundColor: "#265176" };

const FAQItem = ({ title, body }) => {
	return (
		<AccordionItem borderBottom="1px solid #265176" borderTop="none">
			<Text textStyle="menuitems">
				<AccordionButton _focus={FOCUS_STYLE} _hover={HOVER_STYLE} py={3}>
					<Box flex="1" textAlign="left">
						<Text
							textStyle="menuitems"
							fontSize={["17px", , , "20px"]}
							lineHeight="120%"
						>
							{title}
						</Text>
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</Text>
			<AccordionPanel pb={4} pt={0}>
				<Box my={1}>
					<Text
						as="span"
						textStyle="normalbody"
						fontSize={["15px", , , "18px"]}
						color="#75A7D3"
					>
						{body}
					</Text>
				</Box>
			</AccordionPanel>
		</AccordionItem>
	);
};

export default FAQItem;
