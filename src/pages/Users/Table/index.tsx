import {
	Center,
	Td,
	Tr,
} from "@chakra-ui/react";
import { useLocalObservable } from "mobx-react-lite";
import React from "react";
import { TableView } from "../../../components";
import { UserStore } from "./store";
import { RiDeleteBin6Line } from "react-icons/ri";

export const Table: React.FC = () => {
	const store = useLocalObservable(() => new UserStore());
	const headers = ["Nome", "Email"];

	return (
		<Center>
			<TableView
				data={store.users}
				headers={headers}
				renderRow={(item, index) => (
					<Tr fontWeight="bold" key={index}>
						<Td>{item.id}</Td>
						<Td>{item.name}</Td>
						<Td>{item.email}</Td>
						<Td cursor="pointer" onClick={() => store.deleteUser(item.id)}>
							<RiDeleteBin6Line />
						</Td>
					</Tr>
				)}
			/>
		</Center>
	);
};
