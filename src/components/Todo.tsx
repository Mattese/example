import { Typography } from "@mui/material";
import React from "react";
import { TodoInterface } from "../../types";

interface TodoProps {
  todo: TodoInterface;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  return <Typography variant="h4">{todo.title}</Typography>;
};

export default React.memo(Todo);
