import React from "react";
import { Button, Center, Flex } from "@chakra-ui/react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { TextInput } from "../../../components";
import { CreateUserStore } from "./store";
import { useNavigate, useParams } from "react-router-dom";

export const CreateOrEdit = observer(() => {

	const { id } = useParams();
	const store = useLocalObservable(() => new CreateUserStore(id));
	const navigator = useNavigate();

	return (
		<Center flexDirection="column" gap={3}>
			<Flex
				mt={10}
				w={{
					base: "100%",
					md: "80%",
					lg: "70%",
					xl: "40%",
				}}
				direction="column"
				gap={3}
			>
				<TextInput labelText="Nome:" value={store.name} onChange={(e) => store.name = e}/>
				<TextInput labelText="Email:" value={store.email} onChange={(e) => store.email = e}/>
				{!id && <TextInput labelText="Senha:" type="password"onChange={(e) => store.password = e}/>}
				{!id && <TextInput labelText="Confirme a senha:" type="password" onChange={(e) => store.verifiedPassword = e}/>}

			</Flex>
			<Button w={40} onClick={() => store.onCreateUser(() => navigator(-1))}>
				{id ? "Editar" : "Criar"}
			</Button>
		</Center>
	);
});
