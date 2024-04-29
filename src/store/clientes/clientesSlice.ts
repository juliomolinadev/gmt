import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Cliente } from "../../site/interfaces/interfaces";

const initialState: Cliente[] = [];

export const clientesSlice = createSlice({
	name: "clientes",
	initialState,
	reducers: {
		setClientes: (state, action: PayloadAction<Cliente[]>) => {
			state = action.payload;

			return state;
		},
	},
});

export const { setClientes } = clientesSlice.actions;
