import { Routes, Route } from "react-router-dom";
import { RutasSection } from "../screens/sections/RutasSection";
import { CasetasSection } from "../screens/sections/CasetasSection";
import { UnidadesSection } from "../screens/sections/UnidadesSection";
import { CombustibleSection } from "../screens/sections/CombustibleSection";
import { PresupuestosSection } from "../screens/sections/PresupuestosSection";
import { ReportesSection } from "../screens/sections/ReportesSection";

// import { HomeSection } from "../components/dashboard/sections/home/HomeSection";

export const DashboardRouter = () => {
	return (
		<div className="container">
			<Routes>
				<Route path="rutas" element={<RutasSection />} />
				<Route path="casetas" element={<CasetasSection />} />
				<Route path="unidades" element={<UnidadesSection />} />
				<Route path="combustible" element={<CombustibleSection />} />
				<Route path="presupuestos" element={<PresupuestosSection />} />
				<Route path="reportes" element={<ReportesSection />} />
				<Route path="/" element={<PresupuestosSection />} />
			</Routes>
		</div>
	);
};
