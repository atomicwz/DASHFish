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
		<Center>
			<Flex gap={2}  mt={40}>
				<Text>Seja bem vindo, </Text>
				<Text fontWeight="bold" color="secondary.500">{store.user}!</Text>
			</Flex>
		</Center>
	);
};
