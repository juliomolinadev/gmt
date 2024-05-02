import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Presupuesto, VistaPresupuesto } from "../../site/interfaces/interfaces";

interface PresupuestosState {
	presupuestos: Presupuesto[];
	activePresupuesto: Presupuesto | null;
	vistaPresupuesto: VistaPresupuesto | null;
}

const initialState: PresupuestosState = {
	activePresupuesto: null,
	presupuestos: [],
	vistaPresupuesto: null,
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
				id_rutaRegreso: "",
				fechaSalida: "",
				fechaRegreso: "",
				pasajeros: 0,
				id_transporte: "",
				viaticos: 0,
			};
		},

		setPresupuestos: (state, action: PayloadAction<Presupuesto[]>) => {
			state.presupuestos = action.payload;
		},

		setVistaPresupuesto: (state, action: PayloadAction<VistaPresupuesto>) => {
			state.vistaPresupuesto = action.payload;
		},

		unsetVistaPresupuesto: (state) => {
			state.vistaPresupuesto = null;
		},
	},
});

export const {
	addPresupuesto,
	setActivePresupuesto,
	addNewPresupuesto,
	setPresupuestos,
	setVistaPresupuesto,
	unsetVistaPresupuesto,
} = presupuestosSlice.actions;
