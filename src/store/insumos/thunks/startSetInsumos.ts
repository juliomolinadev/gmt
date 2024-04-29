import { AppDispatch } from "../../store";
import { readCollectionFromFirestore } from "../../../firebase/firestoreCRUD";
import { setInsumos } from "../insumosSlice";
import { Insumo } from "../../../site/interfaces/interfaces";
import { DocumentData } from "firebase/firestore";

export const startSetInsumos = () => {
	return async (dispatch: AppDispatch) => {
		const insumosQuery = {
			collectionPath: "insumos",
		};
		const insumosResponse = await readCollectionFromFirestore(insumosQuery);

		if (!insumosResponse) return false;

		const insumos: Insumo[] = [];

		insumosResponse.forEach((insumo: DocumentData) => {
			insumos.push({
				id: insumo.id,
				insumo: insumo.data().insumo,
				costo: insumo.data().costo,
				unidades: insumo.data().unidades,
			});
		});

		dispatch(setInsumos(insumos));

		return true;
	};
};
