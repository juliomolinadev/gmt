import Modal from "react-modal";

import { useTypedDispatch, useTypedSelector } from "../../hooks/storeHooks";
import { useForm } from "../../hooks";
import { setUiErrorMessage } from "../../store/ui";
import { isValidEmail } from "../../helpers";
import { startLoginWithEmailPassword } from "../../store/auth";
import { uiErrorMessages } from "../../assets/errorMessages";
import { useEffect } from "react";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");
// if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

interface FormData {
	email: string;
	password: string;
}

export const LoginForm = () => {
	const { uiErrorMessage } = useTypedSelector((state) => state.ui);
	const { status } = useTypedSelector((state) => state.auth);

	const dispatch = useTypedDispatch();

	const { email, password, handleInputChange, resetForm } = useForm<FormData>({
		email: "",
		password: "",
	});

	useEffect(() => {
		if (status === "authenticated" && email.length > 0) resetForm();
	}, [status, resetForm, email]);

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isFormValid()) {
			await dispatch(startLoginWithEmailPassword({ email, password }));
		}
	};

	const isFormValid = () => {
		if (!isValidEmail(email)) {
			dispatch(setUiErrorMessage(uiErrorMessages.emailError));
			return false;
		}

		if (password.length === 0) {
			dispatch(setUiErrorMessage(uiErrorMessages.passwordError));
			return false;
		}

		dispatch(setUiErrorMessage(null));
		return true;
	};

	const handleSwitchAuthForm = (): void => {
		dispatch(setUiErrorMessage(null));
	};

	return (
		<div className="authForm">
			<h2 className="authForm__heading text-center">Login</h2>

			<form className="form" onSubmit={handleLogin}>
				<div className="form__inputGroup">
					<label htmlFor="email" className="form__label">
						Email:
					</label>
					<input
						id="email"
						type="email"
						className="form__input"
						placeholder="Your email"
						autoComplete="off"
						name="email"
						value={email}
						onChange={handleInputChange}
					/>
				</div>

				<div className="form__inputGroup">
					<label htmlFor="password" className="form__label">
						Password:
					</label>
					<input
						id="password"
						type="password"
						className="form__input"
						placeholder="Your password"
						autoComplete="off"
						name="password"
						value={password}
						onChange={handleInputChange}
					/>
				</div>

				{uiErrorMessage && (
					<div className="form__error animate__animated animate__fadeInDown">{uiErrorMessage}</div>
				)}

				{status === "checking" && <div className="form__spinner"></div>}

				<input type="submit" className="form__button" value="Submit" name="submit" />
			</form>

			<p className="authForm__footer text-center">
				Not registered yet?
				<Link to="/auth/register" className="authForm__link" onClick={handleSwitchAuthForm}>
					Sign up here
				</Link>
			</p>
		</div>
	);
};
