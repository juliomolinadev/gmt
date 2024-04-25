import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useTypedSelector } from "../hooks";

export const PrivateRoute = ({ children }: PropsWithChildren) => {
	//Get authenticated user from store
	const { uid } = useTypedSelector((state) => state.auth);

	return uid ? children : <Navigate to="/auth/login" />;
};
