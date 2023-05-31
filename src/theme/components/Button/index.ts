import { ComponentStyleConfig } from "@chakra-ui/react";
import { theme } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
	defaultProps: {
		variant: "solid",
		colorScheme: "secondary",
	},
	variants: {
		solid: (props) => ({
			...theme.components.Button.variants.solid(props),
			textColor: "white",
			bg: "#4F46E5",
		}),
	},
};
