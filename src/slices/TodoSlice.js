import { createSlice, nanoid } from "@reduxjs/toolkit";

const InitialState = {
  todos: [
    { id: nanoid(), task: "Buy Grocerries", completed: false },
    { id: nanoid(), task: "Attend Meeting", completed: false },
    { id: nanoid(), task: "Do Laundry", completed: false },
  ],
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
    rearrangeTodo: (state, action) => {
      const todo = state.todos.filter((todo) => todo.id === action.payload.id);
      console.log(todo);
      state.todos.splice(action.payload.source, 1);
      state.todos.splice(action.payload.destination, 0, todo[0]);
    },
  },
});

export const {
  addTodo,
  removeTodo,
  editSpecificTodo,
  toggleCompletedTodo,
  rearrangeTodo,
} = TodoSlice.actions;

export default TodoSlice.reducer;
