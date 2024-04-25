import { Routes, Route, HashRouter } from "react-router-dom";

import { useCheckAuth } from "../hooks";
import { PublicRoute } from "./PublicRoute";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { DashboardScreen } from "../screens";

export const AppRouter = () => {
	const status = useCheckAuth();

	if (status === "checking") return <div className="authSpinner"></div>;

	return (
		<HashRouter>
			<Routes>
				<Route
					path="/auth/*"
					element={
						<PublicRoute>
							<AuthRouter />
						</PublicRoute>
					}
				/>

				<Route
					path="/*"
					element={
						<PrivateRoute>
							<DashboardScreen />
						</PrivateRoute>
					}
				/>
			</Routes>
		</HashRouter>
	);
};
