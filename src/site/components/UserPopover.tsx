import { MdKeyboardArrowRight, MdSettings, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";

import { UserCard } from "./UserCard";
import { useTypedDispatch } from "../../hooks";
import { switchPopover } from "../../store/ui";
import { logout } from "../../store/auth";

export const UserPopover = () => {
	const dispatch = useTypedDispatch();

	const handleExit = () => {
		dispatch(logout(null));
		dispatch(switchPopover());
	};

	return (
		<div className="userPopover">
			<MdKeyboardArrowRight className="userPopover__arrow" />

			<UserCard isExpanded={true} large={false} />

			<Link to="/settings">
				<button
					className="userPopover__button userPopover__button--settings"
					onClick={() => dispatch(switchPopover())}
				>
					<MdSettings className="userPopover__icon" />
					Configuración
				</button>
			</Link>

			<button className="userPopover__button userPopover__button--exit" onClick={handleExit}>
				<MdLogout className="userPopover__icon" />
				Salir
			</button>
		</div>
	);
};
