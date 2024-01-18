import { useDispatch, useSelector } from "react-redux";
import { finishedTodos, setEditing } from "../../features/todoSlice";
import { TbEdit } from "react-icons/tb";
function Todos() {
  const { todos, editing } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      {todos.map((todo) => (
        <>
          <div key={todo.id} className="flex gap-x-4 px-4 py-2 ">
            <input
              type="checkbox"
              className="transform scale-125"
              onClick={() => {
                dispatch(finishedTodos(todo.id));
              }}
            />

            <div className="flex justify-between w-full items-center">
              <div className="flex items-center gap-x-2">
                <div>{todo.task}</div>
                {editing.status && editing.currentEdit === todo.id && (
                  <div className="bg-[#ef4444] w-2 h-2 rounded-full"></div>
                )}
              </div>

              <div
                className="sm:transition-transform sm:hover:scale-125"
                onClick={() => {
                  dispatch(setEditing({ status: true, currentEdit: todo.id }));
                }}
              >
                <TbEdit className="text-[#BDBDBD] " size="1.2rem" />
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default Todos;
