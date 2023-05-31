import { Box } from "@chakra-ui/react";
import { Navbar } from "../../components";
import React from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
	children: React.ReactNode;
}

export const ScreenLayout: React.FC<IProps> = ({children}) => {

	const navigator = useNavigate();

	const onLogout = () => {
		navigator("/login");
		window.localStorage.clear();
	};

	return (
		<Box>
			<Navbar onLogout={onLogout}/>
			{children}
		</Box >
	);
};
