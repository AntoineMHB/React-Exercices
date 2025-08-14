import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Calculator from "./components/Calculator.jsx";
import Card from "./components/card.jsx";
import PasswordInput from "./components/PasswordInput.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Calculator /> */}
    {/*
     */}
    <PasswordInput />
  </StrictMode>
);
