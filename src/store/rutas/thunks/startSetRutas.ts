import { AppDispatch } from "../../store";
import { readCollectionFromFirestore } from "../../../firebase/firestoreCRUD";
import { setRutas } from "../rutasSlice";
import { Ruta } from "../../../site/interfaces/interfaces";
import { DocumentData } from "firebase/firestore";

export const startSetRutas = () => {
	return async (dispatch: AppDispatch) => {
		const rutasQuery = {
			collectionPath: "rutas",
		};
		const rutasResponse = await readCollectionFromFirestore(rutasQuery);

		if (!rutasResponse) return false;

		const rutas: Ruta[] = [];

		rutasResponse.forEach((ruta: DocumentData) => {
			rutas.push({
				id: ruta.id,
				ruta: ruta.data().ruta,
				peajes: ruta.data().peajes,
				kilometros: ruta.data().kilometros,
				horas: ruta.data().horas,
				origen: ruta.data().origen,
				destino: ruta.data().destino,
			});
		});

		dispatch(setRutas(rutas));

		return true;
	};
};
