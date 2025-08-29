import { StrictMode, useReducer } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user.jsx";
import { Provider } from "react-redux";
import themeReducer from "./features/theme.jsx";
import taskReducer from "./features/task.jsx";

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    task: taskReducer,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
