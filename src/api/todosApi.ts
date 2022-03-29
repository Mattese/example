import axios, { AxiosError } from "axios";
import { TodoInterface } from "../../types";
import { api } from "../axios";

export const getTodos = async () => {
  try {
    const response = api.get<TodoInterface>("pokemon", {
      params: { limit: 20 },
    });
    // Tady jsem to moc nepochopil, jak chcete aby příklad fungoval. Tak volam nejaky endpoint a vracim TODO list
    return [
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
    ];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error, "Im axios error");
    } else {
      console.error(error, "Im something else");
    }
  }
};
