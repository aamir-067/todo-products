import { createSlice } from "@reduxjs/toolkit";

export interface Todo {
	text: string;
	completed: boolean;
}

const initialState: { allTodo: Array<Todo> } = {
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
		addTodo: (state, action) => {
			state.allTodo.push(action.payload.todo);
		},
		changeTodoStatus: (state, action) => {
			state.allTodo[action.payload.index].completed =
				!state.allTodo[action.payload.index].completed;
		},
	},
});
export const { addTodo, changeTodoStatus } = todoReducer.actions;
export default todoReducer.reducer;
