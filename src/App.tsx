import { useCallback, useEffect, useState } from "react";
import { TodoInterface } from "../types";

import Todo from "./components/Todo";

// rework this into regular api call, feel free to use any open api
const todos = (): Promise<TodoInterface[]> => {
  return new Promise((res) =>
    setTimeout(() => {
      res([
        {
          id: "1",
          title: "Go shopping",
        },
        {
          id: "2",
          title: "Job interview",
        },
        {
          id: "3",
          title: "Prepare homework",
        },
      ]);
    }, 100)
  );
};

function App() {
  const [state, setState] = useState<TodoInterface[]>([]);

  const loadTodos = useCallback(async () => {
    const awaitedTodos = await todos();
    if (awaitedTodos.length > 0) setState([...awaitedTodos]);
  }, []);

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div>
      {state.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
}

export default App;
