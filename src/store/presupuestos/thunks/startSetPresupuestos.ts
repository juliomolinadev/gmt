import { AppDispatch } from "../../store";
import { readCollectionFromFirestore } from "../../../firebase/firestoreCRUD";
import { Presupuesto } from "../../../site/interfaces/interfaces";
import { DocumentData } from "firebase/firestore";
import { setPresupuestos } from "../presupuestosSlice";

export const startSetPresupuestos = () => {
	return async (dispatch: AppDispatch) => {
		const presupuestoQuery = {
			collectionPath: "presupuestos",
		};
		const presupuestosResponse = await readCollectionFromFirestore(presupuestoQuery);

		if (!presupuestosResponse) return false;

		const presupuestos: Presupuesto[] = [];

		presupuestosResponse.forEach((presupuesto: DocumentData) => {
			presupuestos.push({
				id: presupuesto.id,
				id_cliente: presupuesto.data().id_cliente,
				fecha: presupuesto.data().fecha,
				tipoViaje: presupuesto.data().tipoViaje,
				id_rutaIda: presupuesto.data().id_rutaIda,
				id_rutaRegreso: presupuesto.data().id_rutaRegreso,
				fechaSalida: presupuesto.data().fechaSalida,
				fechaRegreso: presupuesto.data().fechaRegreso,
				pasajeros: presupuesto.data().pasajeros,
				id_transporte: presupuesto.data().id_transporte,
				viaticos: presupuesto.data().viaticos,
			});
		});

		dispatch(setPresupuestos(presupuestos));

		return true;
	};
};
