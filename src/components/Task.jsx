import { useSelector } from "react-redux";
import { FaRegTrashCan } from "react-icons/fa6";
import { addTask, removeTask } from "../features/task";
import { useDispatch } from "react-redux";

export function Task() {
  const tasks = useSelector((state) => state.task.value);
  const dispatch = useDispatch();

  return (
    <>
      <div></div>
      <h1 className="text-center">
        <ul>
          {tasks.map((task, index) => (
            <li
              className="flex items-center justify-center gap-2"
              key={task.id}
            >
              {task.name}
              <button onClick={() => dispatch(removeTask(task.id))}>
                <FaRegTrashCan />
              </button>
            </li>
          ))}
        </ul>
      </h1>
    </>
  );
}
