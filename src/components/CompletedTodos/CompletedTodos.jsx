import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";
import {
  deleteCompletedTodo,
  deleteAllCompletedTodos,
} from "../../features/todoSlice";

function CompletedTodos({ page }) {
  const { completedTodos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      {completedTodos.map((todo) => (
        <div key={todo.id} className="flex items-center justify-between">
          <div className="flex gap-x-4 px-4 py-2 ">
            <input type="checkbox" checked className="transform scale-125" />
            <div>
              <s>{todo.task}</s>
            </div>
          </div>
          {page == "completed" && (
            <div
              className="sm:transition-transform sm:hover:scale-125"
              onClick={() => dispatch(deleteCompletedTodo(todo.id))}
            >
              <MdDelete className="text-[#BDBDBD] " size="1.25rem" />
            </div>
          )}
        </div>
      ))}
      {page == "completed" && completedTodos.length > 0 && (
        <div className="relative mt-3">
          <button
            className="absolute right-0 bg-red-500 text-white font-medium p-2 rounded"
            onClick={() => dispatch(deleteAllCompletedTodos())}
          >
            delete all
          </button>
        </div>
      )}
    </div>
  );
}
CompletedTodos.propTypes = {
  page: PropTypes.string.isRequired,
};

export default CompletedTodos;
