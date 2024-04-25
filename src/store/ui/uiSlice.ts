import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../store";

interface UiSliceState {
	uiErrorMessage: string | null;
	isLoading: boolean;
	isMobile: boolean;
	userPopoverExpanded: boolean;
	sidebarExpanded: boolean;
}

const initialState: UiSliceState = {
	uiErrorMessage: null,
	isLoading: false,
	isMobile: window.innerWidth < 768 ? true : false,
	userPopoverExpanded: false,
	sidebarExpanded: true,
};

export const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		switchLoadingState: (state) => {
			state.isLoading = !state.isLoading;
		},

		setUiErrorMessage: (state, action: PayloadAction<string | null>) => {
			state.uiErrorMessage = action.payload;
		},

		toggleSidebar: (state) => {
			state.sidebarExpanded = !state.sidebarExpanded;
		},

		switchPopover: (state) => {
			state.userPopoverExpanded = !state.userPopoverExpanded;
		},
	},
});

export const { switchLoadingState, setUiErrorMessage, toggleSidebar, switchPopover } =
	uiSlice.actions;
