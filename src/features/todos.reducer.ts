import { createSlice } from "@reduxjs/toolkit";

export interface Todo {
	text: string;
	completed: boolean;
}

export interface TodoInitialStatus {
	allTodo: Array<Todo>;
}

const initialState: TodoInitialStatus = {
	allTodo: [
		{
			text: "dummy todo 01",
			completed: false,
		},
		{
			text: "dummy todo 02",
			completed: true,
		},
	],
};

const todoReducer = createSlice({
	name: "todoReducer",
	initialState,
	reducers: {
		addTodo: (state: TodoInitialStatus, action) => {
			state.allTodo.push(action.payload.todo);
		},
		changeTodoStatus: (state: TodoInitialStatus, action) => {
			state.allTodo[action.payload.index].completed =
				!state.allTodo[action.payload.index].completed;
		},
		deleteTodo: (state: TodoInitialStatus, action) => {
			state.allTodo = state.allTodo.splice(action.payload.index, 1);
		},
	},
});
export const { addTodo, changeTodoStatus, deleteTodo } = todoReducer.actions;
export default todoReducer.reducer;
