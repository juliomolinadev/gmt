import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Presupuesto } from "../../site/interfaces/interfaces";

interface BatchesState {
	presupuestos: Presupuesto[];
	activePresupuesto: Presupuesto | null;
}

const initialState: BatchesState = {
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
				tipoViaje: "",
				rutaIda: "",
				rutaRegreso: null,
				fechaSalida: "",
				fechaRegreso: null,
			};
		},
	},
});

export const { addPresupuesto, setActivePresupuesto, addNewPresupuesto } =
	presupuestosSlice.actions;
