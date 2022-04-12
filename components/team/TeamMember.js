import React from "react";
import Image from "next/image";
import { Box, Center, Circle, Text, Icon, HStack } from "@chakra-ui/react";
import styles from "../../pages/styles/home.module.css";
import Link from "next/link";

const TeamMember = ({ name, lastname, imgSrc, description, icon, link }) => {
	return (
		<Center w={["90%", , "50%", "33%"]} mb={[10, , 16]}>
			<Box maxW={["250px", , , , "300px"]} align="center">
				<Circle
					size={["200", , "250", "210", "250"]}
					position="relative"
					overflow="hidden"
					bg="#315A88"
					mb={4}
				>
					{imgSrc && <Image src={imgSrc} layout="fill" alt={`${name} ${lastname}`} />}
				</Circle>
				<HStack justifyContent={"center"} alignItems="center">
					<Text textStyle="memberName" fontSize={["24px", , "36px", "32px", "36px"]}>
						{name} <span className={styles.lastName}>{lastname}</span>
					</Text>
					{icon && link && (
						<Circle
							bg="#417aac"
							size="30px"
							cursor="pointer"
							mt="5px !important"
							transition="background .2s"
							_hover={{ background: "#5b93c5" }}
						>
							<Link href={link} passHref>
								<Icon as={icon} w="20px" h="20px" pt="1px" />
							</Link>
						</Circle>
					)}
				</HStack>
				<Text textStyle="memberDescription">{description}</Text>
			</Box>
		</Center>
	);
};

export default TeamMember;
