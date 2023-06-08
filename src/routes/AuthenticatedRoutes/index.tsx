import React from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "../../pages/Home";
import { ScreenLayout } from "../../layout/Navbar";
import { UserPage } from "../../pages/Users";
import { RouterStore } from "./store";
import { AdminPages } from "../../pages/Admins";

const AuthenticatedRoutes = observer(() => {

	const store = useLocalObservable(() => new RouterStore());

	const navigator = useNavigate();

	React.useEffect(() => {
		if (!window.localStorage.getItem("token")) {
			navigator("/login");
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	return (
		<ScreenLayout isAdmin={store.isAdmin} avatar={store.image}>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/users/*">
					<Route index element={<UserPage.Table isAdmin={store.isAdmin}/>} />
					{store.isAdmin && (
						<>
							<Route path="create" element={<UserPage.CreateOrEdit />} />
							<Route path="edit/:id" element={<UserPage.CreateOrEdit />} />
						</>
					)}
				</Route>
				<Route path="/admin/*">
					<Route index element={<AdminPages.Table/>} />
					{store.isAdmin && (
						<>
							<Route path="create" element={<AdminPages.CreateOrEdit />} />
							<Route path="edit/:id" element={<AdminPages.CreateOrEdit />} />
						</>
					)}
				</Route>
			</Routes>
		</ScreenLayout>
	);
});

export default AuthenticatedRoutes;


