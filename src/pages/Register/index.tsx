import React from "react";
import {
	Button,
	Center,
	Flex,
	Image,
	Spinner,
	Text,
} from "@chakra-ui/react";
import { TextInput } from "../../components";
import { observer, useLocalObservable } from "mobx-react-lite";
import { LoginStore } from "./store";
import { useNavigate } from "react-router-dom";


export const Register: React.FC = observer(() => {
	const store = useLocalObservable(() => new LoginStore());
	const navigator = useNavigate();
	const onSuccess = () => navigator("/");

	return (
		<Flex flexDirection="column" bg="gray.50" h="100vh">
			<Flex
				bg="white"
				w={{
					base:"90%",
					md:"50%",
					lg:"30%",
					xl:"20%",
				}}
				flexDirection="column"
				p={4}
				border="1px solid"
				borderColor="teal.200"
				mx="auto"
				mt={{base: 10, md:250}}
				rounded="md"
			>
				<Center mb={10} flexDirection="column">
					<Image w={20} src="./fish.png" alt="Planeta"/>
					<Text
						color="teal.800"
						fontFamily="Bai Jamjuree"
						fontSize={30}
						cursor="default"
					>
						DASHFish
					</Text>
				</Center>
				<Flex fontFamily="Roboto" flexDirection="column" color="blackAlpha.800">
					<TextInput labelText="Nome:" onChange={(e) =>  store.name = e} />
					<TextInput labelText="Email:" onChange={(e) =>  store.email = e} />
					<TextInput type="password" labelText="Senha:" onChange={(e) =>  store.password = e} />
					<TextInput type="password" labelText="Confirme sua senha:" onChange={(e) =>  store.verifiedPassword = e} />
				</Flex>
				<Button my={10} onClick={() => store.onCreateUser(onSuccess)}>{store.loader.isLoading ? <Spinner /> : "Enviar"}</Button>
			</Flex>
		</Flex>
	);
});
