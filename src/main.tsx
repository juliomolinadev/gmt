import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./store";
import "./scss/app.scss";
import { AppRouter } from "./routes/AppRouter.tsx";
// import "animate.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<AppRouter />
		</Provider>
	</React.StrictMode>
);
