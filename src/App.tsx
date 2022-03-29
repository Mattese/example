import { useCallback, useEffect, useState } from "react";
import { TodoInterface } from "../types";
import { getTodos } from "./api/todosApi";
import AppRoutes from "./routes";
import TodoContext from "./contexts/todoContext";

function App() {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<TodoInterface[]>([]);

  const loadTodos = useCallback(async () => {
    setLoading(true);
    const awaitedTodos = await getTodos();
    if (awaitedTodos && awaitedTodos.length > 0) setState([...awaitedTodos]);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <>
      <TodoContext.Provider value={state}>
        <AppRoutes />
      </TodoContext.Provider>
    </>
  );
}

export default App;
