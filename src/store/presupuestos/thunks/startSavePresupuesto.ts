// import { authResponsesMessages, uiErrorMessages } from "../../../assets/errorMessages";
// import { loginUserWithEmailPassword } from "../../../firebase/firebaseProviders";
import { createDocOnFirestore } from "../../../firebase/firestoreCRUD";
import { Presupuesto } from "../../../site/interfaces/interfaces";
import { AppDispatch } from "../../store";
// import { setUiErrorMessage } from "../../ui";
// import { checkingCredentials, login, logout } from "../authSlice";
import { addPresupuesto } from "../presupuestosSlice";

export const startsavePresupuesto = (presupuesto: Presupuesto) => {
	return async (dispatch: AppDispatch) => {
		// dispatch(checkingCredentials());

		const result = await createDocOnFirestore({
			collectionPath: "presupuestos",
			document: presupuesto,
		});
		// if (!result) {
		// 	const { emailError, passwordError, networkError } = authResponsesMessages;

		// 	const isCredentialsError =
		// 		result.authErrorMessage === emailError || result.authErrorMessage === passwordError;

		// 	const isNetworkError = result.authErrorMessage === networkError;

		// 	if (!result.ok && isNetworkError) {
		// 		dispatch(setUiErrorMessage(uiErrorMessages.networkError));
		// 	}

		// 	if (!result.ok && isCredentialsError) {
		// 		dispatch(setUiErrorMessage(uiErrorMessages.credentialsError));
		// 	}

		// 	dispatch(logout(result.authErrorMessage));
		// 	return result;
		// }

		dispatch(addPresupuesto(presupuesto));
		// dispatch(switchLoginModal());
		return result;
	};
};
