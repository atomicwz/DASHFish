import React from "react";
import { Flex } from "@chakra-ui/react";

interface IProps {
	children: React.ReactNode;
}

export const Card: React.FC<IProps> = ({ children }) => {
	return (
		<Flex
			mx="auto"
			bg="white"
			p={5}
			boxShadow="xl"
			rounded="lg"
			mt={10}
			w={{
				base:"95%",
				md: "80%",
				lg: "60%",
				xl: "30%",
			}}
			flexDirection="column"
		>
			{children}
		</Flex>
	);
};
