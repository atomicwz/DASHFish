import { createStandaloneToast } from "@chakra-ui/react";

export const showError = (message: string, title?: string) => {
	const { toast } = createStandaloneToast();

	toast({
		title,
		description: message,
		status: "error",
		duration: 2000,
		isClosable: true,
	});
};
export const showSuccess = (message: string, title?: string) => {
	const { toast } = createStandaloneToast();

	toast({
		title,
		description: message,
		status: "success",
		duration: 2000,
		isClosable: true,
	});
};

