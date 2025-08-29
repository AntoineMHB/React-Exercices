import { useDispatch } from "react-redux";
import { addTask, removeTask } from "../features/task";
import { useState } from "react";

export default function InputTask() {
  const [myTask, setMyTask] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="text-center mb-5">My ToDo list</h1>

      <div className="flex items-center justify-center gap-2">
        <div className="bg-gray-300 border-amber-200 rounded-full rounded-5 w-[200px]">
          <input
            className="text-start pl-2"
            type="text"
            id="taskInput"
            placeholder="Enter a task"
            onChange={(event) => {
              setMyTask(event.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            dispatch(addTask({ name: myTask }));
            document.getElementById("taskInput").value = "";
          }}
          className="bg-amber-200 w-[80px]"
        >
          Add
        </button>
      </div>
    </>
  );
}
