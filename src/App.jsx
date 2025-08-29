import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColor from "./components/ChangeColor";
import InputTask from "./components/InputTask";
import { Task } from "./components/Task";

function App() {
  return (
    <>
      {/* <Profile />
      <Login />
      <ChangeColor /> */}
      <InputTask />
      <Task />
    </>
  );
}

export default App;
