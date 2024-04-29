import { AppDispatch } from "../../store";
import { readCollectionFromFirestore } from "../../../firebase/firestoreCRUD";
import { setCasetas } from "../casetasSlice";
import { Caseta } from "../../../site/interfaces/interfaces";
import { DocumentData } from "firebase/firestore";

export const startSetCasetas = () => {
	return async (dispatch: AppDispatch) => {
		const casetasQuery = {
			collectionPath: "casetas",
		};
		const casetasResponse = await readCollectionFromFirestore(casetasQuery);

		if (!casetasResponse) return false;

		const casetas: Caseta[] = [];

		casetasResponse.forEach((caseta: DocumentData) => {
			casetas.push({
				id: caseta.id,
				caseta: caseta.data().caseta,
				tarifa_2ejes: caseta.data().tarifa_2ejes,
				tarifa_3ejes: caseta.data().tarifa_3ejes,
			});
		});

		dispatch(setCasetas(casetas));

		return true;
	};
};
