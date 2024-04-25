import { NavLink } from "react-router-dom";
import {
	MdHomeFilled,
	MdRoute,
	MdTextSnippet,
	MdWaterDrop,
	MdDirectionsBus,
	MdInsertChartOutlined,
} from "react-icons/md";
import { Dispatch, SetStateAction } from "react";

export const NavMenu = ({
	onClickFunction,
	isExpanded,
}: {
	onClickFunction: Dispatch<SetStateAction<boolean>>;
	isExpanded: boolean;
}) => {
	const sections = [
		{
			pad: "/rutas",
			label: "Rutas",
			icon: MdRoute,
		},
		{
			pad: "/casetas",
			label: "Casetas",
			icon: MdHomeFilled,
		},
		{
			pad: "/unidades",
			label: "Unidades",
			icon: MdDirectionsBus,
		},
		{
			pad: "/combustible",
			label: "Combustible",
			icon: MdWaterDrop,
		},
		{
			pad: "/presupuestos",
			label: "Presupuestos",
			icon: MdTextSnippet,
		},
		{
			pad: "/reportes",
			label: "Reportes",
			icon: MdInsertChartOutlined,
		},
	];

	return (
		<div className="navMenu">
			{sections.map((section) => (
				<NavLink
					key={section.label}
					onClick={() => onClickFunction(false)}
					className={({ isActive }) => "navMenu__link" + (isActive ? " navMenu__active" : "")}
					to={section.pad}
				>
					<div
						className={`navMenu__label ${
							isExpanded ? "navMenu__label--expanded" : "navMenu__label--collapsed"
						}`}
					>
						{section.label}
					</div>
					<section.icon className="navMenu__icon" />
				</NavLink>
			))}
		</div>
	);
};
