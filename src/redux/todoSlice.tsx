import { createSlice } from "@reduxjs/toolkit";

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

// Define the sate as an array of Todo items

const initialState: Todo[] = [
	{
		id: 1,
		title: "todo1",
		completed: false,
	},
	{ id: 2, title: "todo2", completed: true },
	{ id: 3, title: "todo3", completed: false },
	{ id: 4, title: "todo4", completed: true },
];

const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const newTodo = {
				id: Date.now(),
				title: action.payload.title,
				completed: false,
			};

			state.push(newTodo);
		},
		toggleComplete: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload.id);

			state[index].completed = action.payload.completed;
		},
		deleteTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
	},
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
