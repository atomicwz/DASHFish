import React from "react";
import {
	Center,
	Flex,
	Text,
} from "@chakra-ui/react";
import { useLocalObservable } from "mobx-react-lite";
import { HomeStore } from "./store";

export const Home: React.FC = () => {
	const store = useLocalObservable(() => new HomeStore());
	return (
		<Center overflow="hidden" flexDirection="column" bg="gray.50" h="92vh">
			<Flex gap={2} >
				<Text>Seja bem vindo, </Text>
				<Text fontWeight="bold" color="secondary.500">{store.user}!</Text>
			</Flex>
		</Center>
	);
};
