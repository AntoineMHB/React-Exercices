import { useDispatch } from "react-redux";
import { login, logout } from "../features/user.jsx";

export default function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: "nzanzu", age: 20, email: "nzanzu@gmail.com" })
          );
        }}
        className="bg-amber-200 rounded-full rounded-2 w-[70px]"
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}
