import { createSlice, nanoid } from "@reduxjs/toolkit";

const InitialState = {
  todos: [{ id: nanoid(), task: "Buy Grocerries", completed: false }],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState: InitialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), task: action.payload, completed: false };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editSpecificTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].task = action.payload.text;
    },
    toggleCompletedTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[index].completed = !state.todos[index].completed;
    },
  },
});

export const { addTodo, removeTodo, editSpecificTodo, toggleCompletedTodo } =
  TodoSlice.actions;

export default TodoSlice.reducer;
