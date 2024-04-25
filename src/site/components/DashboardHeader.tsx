import { MdNotifications } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTypedDispatch, useTypedSelector } from "../../hooks";
import { switchPopover } from "../../store/ui";

export const DashboardHeader = () => {
	const { photoURL } = useTypedSelector((state) => state.auth);
	const dispatch = useTypedDispatch();

	return (
		<div className="dashboardHeader">
			<div className="dashboardHeader__logo">
				gm<span>Transport</span>
			</div>

			<div className="dashboardHeader__info">
				<Link to="/notifications">
					<MdNotifications className="dashboardHeader__icon" />
				</Link>

				<div className="dashboardHeader__userImage" onClick={() => dispatch(switchPopover())}>
					<img src={photoURL ? photoURL : "img/user.jpg"} alt="user" />
				</div>
			</div>
		</div>
	);
};
