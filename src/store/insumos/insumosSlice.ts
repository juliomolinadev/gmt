import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Insumo } from "../../site/interfaces/interfaces";

const initialState: Insumo[] = [];

export const insumosSlice = createSlice({
	name: "insumos",
	initialState,
	reducers: {
		setInsumos: (state, action: PayloadAction<Insumo[]>) => {
			state = action.payload;

			return state;
		},
	},
});

export const { setInsumos } = insumosSlice.actions;
