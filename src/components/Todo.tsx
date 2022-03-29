import React from "react";
import { TodoInterface } from "../../types";

interface TodoProps {
  todo: TodoInterface;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const handleOnClick = () => {
    window.location.href = "/detail";
  };
  return <div onClick={handleOnClick}>{todo.title}</div>;
};

export default React.memo(Todo);
