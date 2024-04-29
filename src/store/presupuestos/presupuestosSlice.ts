import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Presupuesto } from "../../site/interfaces/interfaces";

interface PresupuestosState {
	presupuestos: Presupuesto[];
	activePresupuesto: Presupuesto | null;
}

const initialState: PresupuestosState = {
	activePresupuesto: null,
	presupuestos: [],
};

export const presupuestosSlice = createSlice({
	name: "presupuestos",
	initialState,
	reducers: {
		addPresupuesto: (state, action: PayloadAction<Presupuesto>) => {
			state.presupuestos.push(action.payload);
		},

		setActivePresupuesto: (state, action: PayloadAction<Presupuesto>) => {
			state.activePresupuesto = action.payload;
		},

		addNewPresupuesto: (state) => {
			state.activePresupuesto = {
				id: "",
				id_cliente: "",
				fecha: "",
				tipoViaje: "",
				id_rutaIda: "",
				id_rutaRegreso: null,
				fechaSalida: "",
				fechaRegreso: null,
				pasajeros: 0,
				id_transporte: "",
				viaticos: 0,
			};
		},

		setPresupuestos: (state, action: PayloadAction<Presupuesto[]>) => {
			state.presupuestos = action.payload;
		},
	},
});

export const { addPresupuesto, setActivePresupuesto, addNewPresupuesto, setPresupuestos } =
	presupuestosSlice.actions;
