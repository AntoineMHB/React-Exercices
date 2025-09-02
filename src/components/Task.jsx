import { useSelector } from "react-redux";
import { FaRegTrashCan } from "react-icons/fa6";
import { addTask, removeTask, crossTask } from "../features/task";
import { useDispatch } from "react-redux";
import { CiSquareCheck } from "react-icons/ci";

export function Task() {
  const tasks = useSelector((state) => state.task.value);
  const dispatch = useDispatch();

  return (
    <>
      <div></div>
      <h1 className="text-center">
        <ul>
          {tasks.map((task) => (
            <li
              className="flex items-center justify-center gap-2"
              key={task.id}
            >
              {task.name}
              <button onClick={() => dispatch(crossTask(task.id))}>
                <CiSquareCheck />
              </button>
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
