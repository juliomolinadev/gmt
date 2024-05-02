import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { uiSlice } from "./ui";
import { presupuestosSlice } from "./presupuestos/presupuestosSlice";
import { casetasSlice } from "./casetas";
import { clientesSlice } from "./clientes";
import { combustiblesSlice } from "./combustibles";
import { insumosSlice } from "./insumos";
import { rutasSlice } from "./rutas";
import { transportesSlice } from "./transportes";

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		ui: uiSlice.reducer,
		presupuestos: presupuestosSlice.reducer,
		casetas: casetasSlice.reducer,
		clientes: clientesSlice.reducer,
		combustibles: combustiblesSlice.reducer,
		insumos: insumosSlice.reducer,
		rutas: rutasSlice.reducer,
		transportes: transportesSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
