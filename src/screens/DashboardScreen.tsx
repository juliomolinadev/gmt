import { DashboardRouter } from "../routes/DashboardRouter";
import {
	DashboardFooter,
	DashboardHeader,
	DashboardSidebar,
	UserPopover,
} from "../site/components";
import { useTypedSelector } from "../hooks";

export const DashboardScreen = () => {
	const { isMobile } = useTypedSelector((state) => state.ui);
	const { userPopoverExpanded, sidebarExpanded } = useTypedSelector((state) => state.ui);

	return (
		<div className="dashboardScreen">
			{!isMobile && <DashboardSidebar />}

			<div
				className={`dashboardScreen__main ${
					sidebarExpanded ? "dashboardScreen__main--expanded" : "dashboardScreen__main--collapsed"
				}`}
			>
				<DashboardHeader />
				<DashboardRouter />
				{isMobile && <DashboardFooter />}
			</div>

			{userPopoverExpanded && <UserPopover />}
		</div>
	);
};
