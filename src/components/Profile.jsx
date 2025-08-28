import { useSelector } from "react-redux";

export default function Login() {
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <h1 className="text-2xl">Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
