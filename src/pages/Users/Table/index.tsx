import React from "react";
import { useNavigate } from "react-router-dom";
import {
	Button,
	Center,
	Flex,
	Td,
	Tooltip,
	Tr,
} from "@chakra-ui/react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { TableView } from "../../../components";
import { UserStore } from "./store";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { ModalDialog } from "../../../components/ModalConfirm";
import { IsAdmin } from "../../../utils/api.interfaces";
import { formatter } from "../../../utils/formatter";

interface IProps extends IsAdmin {}

export const Table: React.FC<IProps> = observer(({ isAdmin }) => {
	const store = useLocalObservable(() => new UserStore());
	const headers = ["ID", "Nome", "Email", "Criado em", ""];
	const navigator = useNavigate();
	const onGoToEdit = (id: string) => navigator(`edit/${id}`);

	return (
		<Center flexDirection="column">
			<TableView
				data={store.users}
				headers={headers}
				renderRow={(item, index) => (
					<Tr key={index}>
						<Td>{item.id}</Td>
						<Td>{item.name}</Td>
						<Td>{item.email}</Td>
						<Td>{formatter.date(item.createdAt)}</Td>
						{isAdmin ? (
							<Td cursor="pointer">
								<Flex gap={3} color="secondary.500">
									<ModalDialog onClick={() => store.deleteUser(item.id)}>
										<RiDeleteBin6Line />
									</ModalDialog>
									<AiOutlineEdit onClick={() => onGoToEdit(item.id)} />
								</Flex>
							</Td>
						) : (
							<Td/>
						)}
					</Tr>
				)}
			/>
			{isAdmin &&
			<Tooltip label="Clique para criar um usuário">
				<Button mt={10} onClick={() => navigator("create")}>Criar Usuário</Button>
			</Tooltip>
			}
		</Center>
	);
});
