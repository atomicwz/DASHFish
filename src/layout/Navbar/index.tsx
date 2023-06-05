import { Box } from "@chakra-ui/react";
import { Navbar } from "../../components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

interface IProps {
	children: React.ReactNode;
	isAdmin: boolean;
}

export const ScreenLayout: React.FC<IProps> = observer(({children, isAdmin}) => {

	const navigator = useNavigate();

	const onLogout = () => {
		navigator("/login");
		window.localStorage.clear();
	};

	return (
		<Box>
			<Navbar isAdmin={isAdmin} onLogout={onLogout}/>
			{children}
		</Box >
	);
});
