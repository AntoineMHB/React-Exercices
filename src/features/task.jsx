import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "No task entered" };

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    value: initialState,
  },
  reducers: {
    addTask: (state, action) => {
      state.value = action.payload;
    },

    removeTask: (state, action) => {
      state.value = initialState;
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
