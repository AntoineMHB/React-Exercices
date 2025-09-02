import { createSlice } from "@reduxjs/toolkit";

// const initialState = { name: "No task entered" };

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    value: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.value.push({
        id: Date.now(),
        name: action.payload.name,
      });
    },

    removeTask: (state, action) => {
      state.value = state.value.filter((task) => task.id !== action.payload);
    },

    crossTask: (state, action) => {
      state.value = state.value.filter(
        (task) => task.id === action.payload
      ).style.textDecoration = "line-through";
    },
  },
});

export const { addTask, removeTask, crossTask } = taskSlice.actions;

export default taskSlice.reducer;
