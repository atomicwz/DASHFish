import React from "react";
import {
	TableContainer,
	Table,
	Thead,
	Th,
	Tr,
	Tbody,
	BoxProps,
} from "@chakra-ui/react";

interface IProps<DataType> extends BoxProps {
	data: DataType[];
	headers: string[];
	renderRow: (item: DataType, index: number) => React.ReactElement | null;
}

export const TableView = <DataType,>(props: IProps<DataType>) => {

	const { data, renderRow, headers } = props;

	return (
		<>
			<TableContainer
				border="1px solid"
				borderColor="blackAlpha.200"
				minH="50vh"
				rounded="md"
				mt={10}
				pb={4}
				bg="white"
				boxShadow="xl"
			>
				<Table variant='striped' colorScheme="gray" size="lg">
					<Thead bg="red">
						<Tr w="100%" bg="secondary.400" color="white">
							{headers.map((item, key) => <Th color="white" key={key}>{item}</Th>)}
						</Tr>
					</Thead>
					<Tbody w="100%">
						{data.map((dataItem, index) => renderRow(dataItem, index))}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
};
