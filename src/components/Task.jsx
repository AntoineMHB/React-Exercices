import { useSelector } from "react-redux";

export function Task() {
  const tasks = useSelector((state) => state.task.value);

  return (
    <>
      <div></div>
      <h1 className="text-center">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task.name}</li>
          ))}
        </ul>
      </h1>
    </>
  );
}
