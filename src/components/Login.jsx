import { useDispatch } from "react-redux";
import { login } from "../features/user.jsx";

export default function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button className="bg-amber-200 rounded-full rounded-2 w-[70px]">
        Login
      </button>
    </div>
  );
}
