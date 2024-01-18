import { useState } from "react";
import AllTodos from "./components/AllTodos/AllTodos";
import CompletedTodos from "./components/CompletedTodos/CompletedTodos";
import ActiveTodos from "./components/ActiveTodos/ActiveTodos";

function App() {
  const [page, setPage] = useState("all");
  return (
    <div className="h-screen flex md:justify-center font-custom m-3 ">
      <div className="bg-white py-4 px-3 flex flex-col gap-y-3 w-full md:w-[525px]">
        <h1 className="text-3xl font-semibold text-center">TodoMatic</h1>
        <h3 className="text-xl text-center font-medium">
          What needs to be done?
        </h3>
        <div className="flex flex-col">
          <div className="flex justify-between md:px-4">
            <div
              className="w-20  text-center pt-2 cursor-pointer rounded-lg"
              onClick={() => setPage("all")}
            >
              <div>All</div>
              {page == "all" && (
                <div className="w-full bg-[#2F80ED] h-1 mt-2 rounded-t"></div>
              )}
            </div>
            <div
              className="w-20 cursor-pointer text-center pt-2"
              onClick={() => setPage("active")}
            >
              <div>Active</div>
              {page == "active" && (
                <div className="w-full bg-[#2F80ED] h-1 mt-2 rounded-t"></div>
              )}
            </div>
            <div
              className="w-20 cursor-pointer text-center pt-2"
              onClick={() => setPage("completed")}
            >
              <div>Completed</div>
              {page == "completed" && (
                <div className="w-full bg-[#2F80ED] h-1 mt-2 rounded-t"></div>
              )}
            </div>
          </div>
          <hr className="px-1 border-t-4 md:border-t-2 text-[#333]" />
        </div>
        <div className="py-3 px-4 sm:px-6 flex flex-col ">
          {page == "all" && <AllTodos />}
          {page == "active" && <ActiveTodos />}
          {page == "completed" && <CompletedTodos page={page} />}
        </div>
      </div>
    </div>
  );
}

export default App;
