import { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks";
import { PresupuestoForm } from "../../site/components";
import { PresupuestosTable } from "../../site/components/PresupuestosTable";
import { TableAndDetailTemplate } from "../../templates/TableAndDetailTemplate";

import { startSetCasetas } from "../../store/casetas";
import { startSetClientes } from "../../store/clientes";
import { startSetCombustibles } from "../../store/combustibles";
import { startSetInsumos } from "../../store/insumos";
import { startSetRutas } from "../../store/rutas";
import { startSetTransportes } from "../../store/transportes";
import { startSetPresupuestos } from "../../store/presupuestos/thunks/startSetPresupuestos";

export const PresupuestosSection = () => {
	const { activePresupuesto } = useTypedSelector((state) => state.presupuestos);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		dispatch(startSetPresupuestos());
		dispatch(startSetCasetas());
		dispatch(startSetClientes());
		dispatch(startSetCombustibles());
		dispatch(startSetInsumos());
		dispatch(startSetRutas());
		dispatch(startSetTransportes());
	}, [dispatch]);

	return (
		<TableAndDetailTemplate
			Table={() => <PresupuestosTable />}
			Detail={() => <PresupuestoForm />}
			isOpenDetail={!!activePresupuesto}
		/>
	);
};
