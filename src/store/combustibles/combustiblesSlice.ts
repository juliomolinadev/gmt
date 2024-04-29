import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Combustible } from "../../site/interfaces/interfaces";

const initialState: Combustible[] = [];

export const combustiblesSlice = createSlice({
	name: "combustibles",
	initialState,
	reducers: {
		setCombustibles: (state, action: PayloadAction<Combustible[]>) => {
			state = action.payload;

			return state;
		},
	},
});

export const { setCombustibles } = combustiblesSlice.actions;
