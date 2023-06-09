import React from "react";
import {
	Button,
	Center,
	Flex,
	Image,
	Input,
	Spinner,
	Text,
} from "@chakra-ui/react";
import { TextInput } from "../../components";
import { observer, useLocalObservable } from "mobx-react-lite";
import { LoginStore } from "./store";
import { useNavigate } from "react-router-dom";


export const Login: React.FC = observer(() => {
	const store = useLocalObservable(() => new LoginStore());
	const navigator = useNavigate();
	const onLogin = () => navigator("/");

	React.useEffect(() => {
		if (window.localStorage.getItem("token")) {
			navigator("/");
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	const onGoToCreate = () => navigator("/register");
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
					<TextInput labelText="Digite seu email" onChange={(e) =>  store.email = e} />
					<Flex justifyContent="space-between">
						<Text mb={1} fontWeight="500">Senha:</Text>
						<Text
							color="secondary.500"
							cursor="pointer"
						>
						Esqueceu a senha?
						</Text>
					</Flex>
					<Input onChange={(e) =>  store.password = e.target.value} color="blackAlpha.700" type="password" />
					{store.setShowError && <Text textAlign="center" fontSize={14} color="red.500" mt={3}>Email e/ou senha inválidos.</Text>}
				</Flex>
				<Button my={10} onClick={() => store.onLogin(onLogin)}>{store.loader.isLoading ? <Spinner /> : "Entrar"}</Button>
				<Flex gap={1} justifyContent="center">
					<Text mb={1}>Ainda não possui conta?</Text>
					<Text
						color="secondary.500"
						cursor="pointer"
						fontWeight="bold"
						onClick={() => onGoToCreate()}
					>
						Cadastre-se!
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
});
