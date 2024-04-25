import { Routes, Route } from "react-router-dom";
import { LoginScreen, RegisterScreen } from "../screens";

export const AuthRouter = () => {
	return (
		<Routes>
			<Route path="login" element={<LoginScreen />} />
			<Route path="register" element={<RegisterScreen />} />
		</Routes>
	);
};
