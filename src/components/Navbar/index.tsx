import React from "react";
import {
	Flex,
	Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface IProps {
	onLogout: () => void;
}

export const Navbar: React.FC<IProps> = ({onLogout}) => {
	const navigator = useNavigate();
	return (
		<Flex p={4} bg="white" border="1px solid #e5e5e5" fontFamily="Roboto" color="blackAlpha.800">
			<Flex mx="auto" w="80%" justifyContent="space-between" alignItems="center">
				<Text fontSize={25} fontFamily="Bai Jamjuree">DASHFish</Text>
				<Flex gap={5}>
					<Text
						fontSize={18}
						cursor="pointer"
						transition=".4s"
						_hover={{
							color: "blackAlpha.700",
						}}
					>
                        Administradores
					</Text>
					<Text
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
