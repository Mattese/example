import { createContext } from "react";
import { TodoInterface } from "../../types";

const TodoContext = createContext<TodoInterface[]>([]);

export default TodoContext;
