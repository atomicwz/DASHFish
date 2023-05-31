import React from "react";
import { Flex, Text, Input } from "@chakra-ui/react";

interface IProps {
	labelText: string;
	onChange: (e: string) => void;
	type?: React.HTMLInputTypeAttribute;
}

export const TextInput: React.FC<IProps> = ({labelText, onChange, type}) => {
	return (
		<Flex gap={1} flexDirection="column">
			<Text fontWeight="500">{labelText}</Text>
			<Input type={type ? type : "text"} onChange={(e) => onChange(e.target.value)} color="blackAlpha.700" mb={5} />
		</Flex>
	);
};
