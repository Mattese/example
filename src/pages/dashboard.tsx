import { useState, useCallback, useEffect, useContext } from "react";
import { TodoInterface } from "../../types";
import Todo from "../components/Todo";
import TodoContext from "../contexts/todoContext";

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
  const todos = useContext(TodoContext);

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
};
