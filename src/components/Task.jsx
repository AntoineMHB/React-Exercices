import { useSelector } from "react-redux";

export function Task() {
  const task = useSelector((state) => state.task.value);
  return (
    <>
      <h1 className="text-center">{task.name}</h1>
    </>
  );
}
