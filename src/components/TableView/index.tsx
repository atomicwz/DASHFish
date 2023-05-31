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

export const TableView: React.FC = <DataType,>(props: IProps<DataType>) => {

	const { data, renderRow, headers } = props;

	return (
		<>
			<TableContainer pb={4}>
				<Table variant='striped' colorScheme='blackAlpha' border="1px solid rgba(0,0,0,.1)">
					<Thead>
						<Tr>
							{headers.map((item, key) => <Th key={key}>{item}</Th>)}
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
