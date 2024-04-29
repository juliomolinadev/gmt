import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Ruta } from "../../site/interfaces/interfaces";

const initialState: Ruta[] = [];

export const rutasSlice = createSlice({
	name: "rutas",
	initialState,
	reducers: {
		setRutas: (state, action: PayloadAction<Ruta[]>) => {
			state = action.payload;

			return state;
		},
	},
});

export const { setRutas } = rutasSlice.actions;
