import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodos, setEditing } from "../../features/todoSlice";
function EditTask() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const { editing } = useSelector((state) => state.todos);
  const changeTask = () => {
    if (input.trim() !== "" && editing.currentEdit && editing.status) {
      dispatch(editTodos(input));
      setInput("");
      dispatch(setEditing({ status: false, currentEdit: null }));
    }
  };
  return (
    <div className=" mb-4 flex flex-col sm:flex-row items-center sm:justify-center gap-x-0 ">
      <input
        type="text"
        className="w-full sm:w-3/4 p-2 text-sm outline-none border-[1px] border-[#BDBDBD] rounded mb-2 sm:mb-0 mr-0 sm:mr-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Change the task"
      />
      <button
        className="w-full sm:w-auto px-4 py-2 text-white font-normal text-xs bg-[#2F80ED] rounded sm:transition-transform sm:hover:scale-105"
        onClick={changeTask}
      >
        Change
      </button>
    </div>
  );
}

export default EditTask;
