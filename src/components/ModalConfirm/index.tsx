import React from "react";
import {
	Button,
	Modal,
	ModalOverlay,
	useDisclosure,
	ModalBody,
	ModalHeader,
	ModalContent,
	ModalFooter,
	Text,
	Box,
} from "@chakra-ui/react";

interface IProps {
	children: React.ReactNode;
	onClick: () => void;
	title?: string;
	description?: string;
}

export const ModalDialog: React.FC<IProps> = ({children, description, title, onClick}) =>{

	const deleteMessage = {
		title: "Deletar",
		description: "Tem certeza que deseja remover permanentemente?",
	};


	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Box onClick={onOpen}>
				{children}
			</Box>
			<Modal
				isCentered
				blockScrollOnMount={false}
				isOpen={isOpen}
				onClose={onClose}
				motionPreset='slideInRight'
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{title ? description : deleteMessage.title}</ModalHeader>
					<ModalBody>
						<Text fontWeight='bold' mb='1rem'>
							{description ? description :deleteMessage.description}
						</Text>
					</ModalBody>
					<ModalFooter>
						<Button
							colorScheme='blue'
							onClick={() => {
								onClick();
								onClose();
							}} mr={3}
						>
							Confirmar
						</Button>
						<Button variant='ghost' onClick={onClose}>Cancelar</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
