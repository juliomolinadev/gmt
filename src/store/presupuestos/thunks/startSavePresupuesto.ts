import { createDocOnFirestore } from "../../../firebase/firestoreCRUD";
import { Presupuesto } from "../../../site/interfaces/interfaces";
import { AppDispatch } from "../../store";
import { addPresupuesto } from "../presupuestosSlice";

export const startsavePresupuesto = (presupuesto: Presupuesto) => {
	return async (dispatch: AppDispatch) => {
		const result = await createDocOnFirestore({
			collectionPath: "presupuestos",
			document: presupuesto,
		});

		dispatch(addPresupuesto(presupuesto));
		return result;
	};
};
