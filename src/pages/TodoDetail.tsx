import { Card, Typography } from "@mui/material";
import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import TodoContext from "../contexts/todoContext";

export const TodoDetail: React.FC = () => {
  const todos = useContext(TodoContext);
  const { id } = useParams();

  const todo = useMemo(() => {
    const foundTodo = todos.find((todo) => todo.id === id);
    return foundTodo;
  }, [todos, id]);

  return (
    <>
      {todo ? (
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h3">{todo.title}</Typography>
          <Typography variant="h5">{`Id is: ${todo.id}`}</Typography>
        </Card>
      ) : (
        "Todo not found"
      )}
    </>
  );
};
