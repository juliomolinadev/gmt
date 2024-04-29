import { AppDispatch } from "../../store";
import { readCollectionFromFirestore } from "../../../firebase/firestoreCRUD";
import { setTransportes } from "../transportesSlice";
import { Transporte } from "../../../site/interfaces/interfaces";
import { DocumentData } from "firebase/firestore";

export const startSetTransportes = () => {
	return async (dispatch: AppDispatch) => {
		const transportesQuery = {
			collectionPath: "transportes",
		};
		const transportesResponse = await readCollectionFromFirestore(transportesQuery);

		if (!transportesResponse) return false;

		const transportes: Transporte[] = [];

		transportesResponse.forEach((transporte: DocumentData) => {
			transportes.push({
				id: transporte.id,
				transporte: transporte.data().transporte,
				ejes: transporte.data().ejes,
				capacidad: transporte.data().capacidad,
				combustible: transporte.data().combustible,
				rendimiento: transporte.data().rendimiento,
			});
		});

		dispatch(setTransportes(transportes));

		return true;
	};
};
