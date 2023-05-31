import { ComponentStyleConfig } from "@chakra-ui/react";
import { theme } from "@chakra-ui/theme";

export const Input: ComponentStyleConfig = {
	defaultProps: {
		variant: "solid",
		_hover: {
			bg: "gray.200",
		},
	},
	variants: {
		solid: (props) => ({
			...theme.components.Button.variants.solid(props),
			field: {
				color: "black",
				border: "1px solid #D1D5DB",
				height: 9,
			},
		}),
	},
};
