import React from "react";
import { observer } from "mobx-react-lite";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "../../pages/Home";
import { ScreenLayout } from "../../layout/Navbar";
import { UserPage } from "../../pages/Users";

const AuthenticatedRoutes = observer(() => {

	const navigator = useNavigate();

	React.useEffect(() => {
		if (!window.localStorage.getItem("token")) {
			navigator("/login");
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	return (
		<ScreenLayout>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/users">
					<Route index element={<UserPage.Table />} />
				</Route>
			</Routes>
		</ScreenLayout>
	);
});

export default AuthenticatedRoutes;


