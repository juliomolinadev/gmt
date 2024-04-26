import { PresupuestosTable } from "../../site/components/PresupuestosTable";
import { TableAndDetailTemplate } from "../../templates/TableAndDetailTemplate";

export const PresupuestosSection = () => {
	return (
		<TableAndDetailTemplate
			Table={() => <PresupuestosTable />}
			Detail={() => <></>}
			isOpenDetail={false}
		/>
	);
};
