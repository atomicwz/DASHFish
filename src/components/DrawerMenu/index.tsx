import React from "react";
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
	useDisclosure,
	Text,
	Box,
	Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface IProps {
	children: React.ReactNode;
	isAdmin: boolean;
}

export const DrawerMenu: React.FC<IProps> = ({ children, isAdmin })=>{
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigator = useNavigate();

	return (
		<>
			<Box onClick={onOpen}>
				{children}
			</Box>
			<Drawer
				isOpen={isOpen}
				size="full"
				placement='left'
				onClose={onClose}
			>
				<DrawerOverlay />
				<DrawerContent bg="secondary.400" color="white">
					<DrawerHeader
						fontSize={35}
						mt={20}
						onClick={() => {
							navigator("/");
							onClose();
						}}
						fontFamily="Bai Jamjuree"
						cursor="pointer"
						color="white"
						textAlign="center"
					>
                        DASHFish
					</DrawerHeader>
					<DrawerBody>
						<Center fontSize={18} fontWeight="bold" flexDirection="column" mt={10} gap={7}>
							{isAdmin && <Text
								onClick={() => {
									navigator("/admin");
									onClose();
								}
								}
							>
								Administradores
							</Text>}
							<Text
								onClick={() => {
									navigator("/users");
									onClose();
								}
								}
							>
									Usuários
							</Text>
							<Text textDecor="underline" onClick={() => onClose()}>
									Fechar
							</Text>
							<Text
								onClick={() => {
									window.localStorage.clear();
									navigator("/login");
								}}
								mt={28}
							>
								Sair
							</Text>
						</Center>
					</DrawerBody>
					<DrawerFooter />
				</DrawerContent>
			</Drawer>
		</>
	);
};
