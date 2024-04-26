import { PresupuestoForm } from "../../site/components";
import { PresupuestosTable } from "../../site/components/PresupuestosTable";
import { TableAndDetailTemplate } from "../../templates/TableAndDetailTemplate";

export const PresupuestosSection = () => {
	return (
		<TableAndDetailTemplate
			Table={() => <PresupuestosTable />}
			Detail={() => <PresupuestoForm />}
			isOpenDetail={true}
		/>
	);
};
