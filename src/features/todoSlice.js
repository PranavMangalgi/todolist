import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  completedTodos: [],
  editing: { status: false, currentEdit: null },
};

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo:(state,{payload})=>{
      state.todos = state.todos.filter(todo=>todo.id!==payload);
    },
    finishedTodos: (state, { payload }) => {
      const fullfilled = state.todos.find((todo) => todo.id == payload);
      state.completedTodos.push(fullfilled);
      state.todos = state.todos.filter((todo) => todo.id != payload);
    },
    setEditing: (state, { payload }) => {
      state.editing = payload;
    },

    editTodos: (state, { payload }) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id == state.editing.currentEdit) {
          return { ...todo, task: payload };
        }
        return todo;
      });
    },
    deleteCompletedTodo: (state, { payload }) => {
      state.completedTodos = state.completedTodos.filter(
        (todo) => todo.id !== payload,
      );
    },
    deleteAllCompletedTodos: (state) => {
      state.completedTodos = initialState.completedTodos;
    },
  },
});

export const {
  addTodos,
  deleteTodo,
  finishedTodos,
  setEditing,
  deleteCompletedTodo,
  editTodos,
  deleteAllCompletedTodos,
} = todos.actions;
export default todos.reducer;
