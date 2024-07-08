import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import todoReducer, { TodoInitialStatus } from "../features/todos.reducer";
import productsReducer, {
	ProductInitialStatus,
} from "../features/products.reducer";
export const store: EnhancedStore = configureStore({
	reducer: {
		todos: todoReducer,
		products: productsReducer,
	},
});

export interface Store {
	todos: TodoInitialStatus;
	products: ProductInitialStatus;
}
