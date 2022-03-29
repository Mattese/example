import { useState, useCallback, useEffect } from "react";
import { TodoInterface } from "../../types";
import Todo from "../components/Todo";

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

export const Dashboard = () => {
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
};
