import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Products from "../components/Products";
import Todos from "../components/Todos";
import App from "../App";

export const routes = createBrowserRouter(createRoutesFromElements(
	<Route path="/" element={<App />}>
		<Route index element={<Todos />} />
		<Route path="products" element={<Products />} />
	</Route>
));
