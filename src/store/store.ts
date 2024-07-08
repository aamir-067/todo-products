import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos.reducer";
export const store = configureStore({
	reducer: {
		allTodo: todoReducer,
	},
});
