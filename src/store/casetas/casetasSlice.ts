import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Caseta } from "../../site/interfaces/interfaces";

const initialState: Caseta[] = [];

export const casetasSlice = createSlice({
	name: "casetas",
	initialState,
	reducers: {
		setCasetas: (state, action: PayloadAction<Caseta[]>) => {
			state = action.payload;

			return state;
		},
	},
});

export const { setCasetas } = casetasSlice.actions;
