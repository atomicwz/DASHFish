import {
	Flex,
	Td,
	Tr,
} from "@chakra-ui/react";
import { useLocalObservable } from "mobx-react-lite";
import React from "react";
import { TableView } from "../../../components";
import { UserStore } from "./store";
import { User } from "../../../utils/apiInterfaces";

export const Table: React.FC = () => {
	const store = useLocalObservable(() => new UserStore());
	const headers = ["Nome", "Email"];
	return (
		<Flex>
			<TableView
				data={store.users}
				headers={headers}
				renderRow={(item: User) => (
					<Tr>
						<Td>{item.id}</Td>
						<Td>{item.name}</Td>
						<Td>{item.email}</Td>
					</Tr>
				)}
			/>
		</Flex>
	);
};
