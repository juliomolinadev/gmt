import { MdAddCircle } from "react-icons/md";
import DataTable from "react-data-table-component";

import {
	addNewPresupuesto,
	setActivePresupuesto,
} from "../../store/presupuestos/presupuestosSlice";
import { Presupuesto } from "../interfaces/interfaces";
import { useTypedDispatch, useTypedSelector } from "../../hooks";

export const PresupuestosTable = () => {
	const { presupuestos, activePresupuesto } = useTypedSelector((state) => state.presupuestos);

	const dispatch = useTypedDispatch();

	const selectRow = (presupuesto: Presupuesto) => {
		dispatch(setActivePresupuesto(presupuesto));
	};

	const addPresupuesto = () => {
		dispatch(addNewPresupuesto());
	};

	const paginationOptions = {
		rowsPerPageText: "Filas por página",
		rangeSeparatorText: "de",
		selectAllRowsItem: true,
		selectAllRowsItemText: "Todos",
	};

	const customStyles = {
		headCells: {
			style: {
				color: "#3182ce",
				fontWeight: 900,
			},
		},

		rows: {
			style: {
				minHeight: "3.2rem",
				transition: "background-color 300ms ease",
				"&:hover": {
					borderRadius: "0.5rem",
					backgroundColor: "#d6e6f5",
					cursor: "pointer",
				},
			},
		},
	};

	const conditionalRowStyles = [
		{
			when: (row: Presupuesto) => row.id === activePresupuesto?.id,
			style: {
				color: "#3182ce",
				"&:hover": {
					cursor: "pointer",
				},
			},
		},
	];

	const columns = [
		{
			name: "Id",
			selector: (row: Presupuesto) => row.id,
			sortable: true,
			width: "10rem",
			center: true,
		},
		{
			name: "Tipo",
			selector: (row: Presupuesto) => row.tipoViaje,
			sortable: true,
			width: "10rem",
			center: true,
		},
		{
			name: "Ruta Ida",
			selector: (row: Presupuesto) => row.rutaIda,
			sortable: true,
			width: "10rem",
			center: true,
		},
		{
			name: "Ruta Regreso",
			selector: (row: Presupuesto) => row.rutaRegreso,
			sortable: true,
			width: "10rem",
			center: true,
		},
		{
			name: "Fecha Salida",
			selector: (row: Presupuesto) => row.fechaSalida,
			sortable: true,
			width: "10rem",
			center: true,
		},
		{
			name: "Fecha Regreso",
			selector: (row: Presupuesto) => row.fechaRegreso,
			sortable: true,
			width: "10rem",
			center: true,
		},
	];

	return (
		<div className="collectionTable">
			<DataTable
				title={"Presupuestos"}
				columns={columns}
				data={presupuestos}
				customStyles={customStyles}
				conditionalRowStyles={conditionalRowStyles}
				pagination
				paginationComponentOptions={paginationOptions}
				onRowClicked={selectRow}
				noDataComponent="No hay elementos para mostrar."
			/>

			<div className="collectionTable__addButton" onClick={addPresupuesto}>
				<MdAddCircle />
			</div>
		</div>
	);
};
