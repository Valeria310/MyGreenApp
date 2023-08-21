import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app/AppRoutes";
import ScrollToTop from "./app/ScrollToTop";

export const App = () => (
	<BrowserRouter>
		<ScrollToTop />
		<AppRoutes />
	</BrowserRouter>
);
