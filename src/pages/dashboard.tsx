import { Box, Button, Card } from "@mui/material";
import { useState, useCallback, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <Box
      sx={{ marginTop: 10 }}
      justifyContent="center"
      display="flex"
      flexDirection="row"
      gap={2}
    >
      {todos.map((todo, index) => (
        <Card
          sx={{
            padding: 2,
            textAlign: "center",
          }}
        >
          <Todo key={index} todo={todo} />

          <Button
            onClick={() => navigate(`/todo/${todo.id}`)}
            sx={{ marginTop: 3 }}
            variant="contained"
          >
            Go to detail
          </Button>
        </Card>
      ))}
    </Box>
  );
};
