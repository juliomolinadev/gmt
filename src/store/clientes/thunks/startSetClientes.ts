import { AppDispatch } from "../../store";
import { readCollectionFromFirestore } from "../../../firebase/firestoreCRUD";
import { setClientes } from "../clientesSlice";
import { Cliente } from "../../../site/interfaces/interfaces";
import { DocumentData } from "firebase/firestore";

export const startSetClientes = () => {
	return async (dispatch: AppDispatch) => {
		const clientesQuery = {
			collectionPath: "clientes",
		};
		const clientesResponse = await readCollectionFromFirestore(clientesQuery);

		if (!clientesResponse) return false;

		const clientes: Cliente[] = [];

		clientesResponse.forEach((cliente: DocumentData) => {
			clientes.push({
				id: cliente.id,
				nombre: cliente.data().nombre,
			});
		});

		dispatch(setClientes(clientes));

		return true;
	};
};
