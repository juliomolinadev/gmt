import { AppDispatch } from "../../store";
import { readCollectionFromFirestore } from "../../../firebase/firestoreCRUD";
import { setCombustibles } from "../combustiblesSlice";
import { Combustible } from "../../../site/interfaces/interfaces";
import { DocumentData } from "firebase/firestore";

export const startSetCombustibles = () => {
	return async (dispatch: AppDispatch) => {
		const combustiblesQuery = {
			collectionPath: "combustibles",
		};
		const combustiblesResponse = await readCollectionFromFirestore(combustiblesQuery);

		if (!combustiblesResponse) return false;

		const combustibles: Combustible[] = [];

		combustiblesResponse.forEach((combustible: DocumentData) => {
			combustibles.push({
				id: combustible.id,
				combustible: combustible.data().combustible,
				costo: combustible.data().costo,
			});
		});

		dispatch(setCombustibles(combustibles));

		return true;
	};
};
