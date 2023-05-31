import React from "react";
import { observer } from "mobx-react-lite";
import { Route, Routes} from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import AuthenticatedRoutes from "./AuthenticatedRoutes";

const App = observer(() => {
	return (
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
	);
});

export default App;
