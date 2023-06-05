import React from "react";
import {
	Flex,
	Text,
	Tooltip,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

interface IProps {
	onLogout: () => void;
	isAdmin?: boolean;
}

export const Navbar: React.FC<IProps> = ({onLogout, isAdmin}) => {
	const navigator = useNavigate();
	const location = useLocation();
	return (
		<Flex p={4} bg="secondary.400" boxShadow="xl" fontFamily="Roboto" color="blackAlpha.800">
			<Flex mx="auto" w="80%" justifyContent="space-between" alignItems="center">
				<Tooltip label="Voltar ao início.">
					<Text
						onClick={() => navigator("/")}
						fontSize={30}
						fontFamily="Bai Jamjuree"
						cursor="pointer"
						color="white"
					>
						DASHFish
					</Text>
				</Tooltip>
				<Flex gap={5}>
					{isAdmin &&
					<Text
						fontSize={18}
						cursor="pointer"
						transition=".4s"
						_hover={{
							color: "blackAlpha.700",
						}}
						onClick={() => navigator("/admin")}
						color={location.pathname === "/admin" ? "black" : "white"}
					>
                        Administradores
					</Text>}
					<Text
						color={location.pathname === "/users" ? "black" : "white"}
						fontSize={18}
						cursor="pointer"
						transition=".4s"
						_hover={{
							color: "blackAlpha.700",
						}}
						onClick={() => navigator("/users")}
					>
                        Usuários
					</Text>
					<Text
						fontSize={18}
						cursor="pointer"
						color="white"
						transition=".1s"
						onClick={onLogout}
						_hover={{
							color: "blackAlpha.700",
						}}
						ml={7}
					>
                        Sair
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};
