import React from "react";
import { Circle, Link, Icon, Center } from "@chakra-ui/react";

const CircleIconButton = ({ size = "40px", href, icon }) => {
	return (
		<Link
			href={href}
			isExternal
			_hover={{ textDecoration: "none", outline: "none", outlineOffset: 0 }}
			_focus={{ outline: "none" }}
		>
			<Center>
				<Circle
					size={size}
					background="#4E89CA"
					margin="0"
					transition="background-color .2s"
					_hover={{ backgroundColor: "#fff" }}
				>
					<Icon as={icon} w={"60%"} h={"60%"} color="#000" />
				</Circle>
			</Center>
		</Link>
	);
};

export default CircleIconButton;
