import { useSelector } from "react-redux";
import InputAdd from "../InputAdd/InputAdd";
import EditTask from "../EditTask/EditTask";
import CompletedTodos from "../CompletedTodos/CompletedTodos";
import Todos from "../Todos/Todos";

function AllTodos() {
  const { editing } = useSelector((state) => state.todos);
  return (
    <div>
      <InputAdd />
      {editing.status && <EditTask />}
      <Todos />
      <CompletedTodos />
    </div>
  );
}

export default AllTodos;
