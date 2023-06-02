import React from "react";
import { observer } from "mobx-react-lite";
import { Route, Routes} from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import { Flex } from "@chakra-ui/react";

const App = observer(() => {
	return (
		<Flex h="100vh" bg="gray.100" direction="column">
			<Routes>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/register"
					element={<Register />}
				/>
				<Route
					path="/*"
					element={<AuthenticatedRoutes />}
				/>
			</Routes>
		</Flex>
	);
});

export default App;
