import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Transporte } from "../../site/interfaces/interfaces";

const initialState: Transporte[] = [];

export const transportesSlice = createSlice({
	name: "transportes",
	initialState,
	reducers: {
		setTransportes: (state, action: PayloadAction<Transporte[]>) => {
			state = action.payload;

			return state;
		},
	},
});

export const { setTransportes } = transportesSlice.actions;
