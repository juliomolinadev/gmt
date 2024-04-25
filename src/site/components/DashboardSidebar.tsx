import { MdKeyboardArrowRight, MdLogout } from "react-icons/md";

import { NavMenu } from "./NavMenu";
import { UserCard } from "./UserCard";
// import { setSidebarState } from "../../../actions/dashboard/dashboardActions";
import { useTypedDispatch, useTypedSelector } from "../../hooks";
import { startLogout } from "../../store/auth";
import { confirmAlert } from "../../helpers";
import { toggleSidebar } from "../../store/ui";

export const DashboardSidebar = () => {
	const dispatch = useTypedDispatch();
	const { sidebarExpanded } = useTypedSelector((state) => state.ui);

	const handleSetSidebarState = () => {
		dispatch(toggleSidebar());
	};

	const handleLogout = (): void => {
		const alert = {
			title: "Are you sure you want to log out?",
			action: () => dispatch(startLogout()),
		};

		confirmAlert(alert);
	};

	return (
		<div
			className={`dashboardSidebar ${
				sidebarExpanded ? "dashboardSidebar--expanded" : "dashboardSidebar--collapsed"
			}`}
		>
			<div className="dashboardSidebar__expander">
				<MdKeyboardArrowRight
					onClick={handleSetSidebarState}
					className={`dashboardSidebar__expanderIcon ${
						sidebarExpanded
							? "dashboardSidebar__expanderIcon--expanded"
							: "dashboardSidebar__expanderIcon--collapsed"
					}`}
				/>
			</div>

			<UserCard isExpanded={sidebarExpanded} large={false} />

			<NavMenu onClickFunction={() => false} isExpanded={sidebarExpanded} />

			<div className="dashboardSidebar__exit">
				<button className="dashboardSidebar__exitButton" onClick={handleLogout}>
					<MdLogout className="dashboardSidebar__exitIcon" />

					<div
						className={`dashboardSidebar__exitLabel ${
							sidebarExpanded
								? "dashboardSidebar__exitLabel--expanded"
								: "dashboardSidebar__exitLabel--collapsed"
						}`}
					>
						Salir
					</div>
				</button>
			</div>
		</div>
	);
};
