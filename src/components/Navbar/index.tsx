import React from "react";
import {
	Flex,
	Image,
	Text,
	Box,
	Tooltip,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { observer } from "mobx-react-lite";
import { DrawerMenu } from "../DrawerMenu";

interface IProps {
	onLogout: () => void;
	isAdmin: boolean;
	avatar: string;
}

export const Navbar: React.FC<IProps> = observer(({onLogout, isAdmin, avatar}) => {
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
				<DrawerMenu isAdmin={isAdmin}>
					<Box display={{base: "block", md:"none"}}>
						<AiOutlineMenu  color="white" fontSize={30}/>
					</Box>
				</DrawerMenu>
				<Flex display={{base: "none", md:"flex"}} gap={5} alignItems="center">
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
					{avatar ? <Image src={avatar} alt="Avatar" w={20} rounded="xl"/> : <BiUserCircle />}
				</Flex>
			</Flex>
		</Flex>
	);
});
