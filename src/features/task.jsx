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
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
