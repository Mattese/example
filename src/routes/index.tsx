import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { TodoDetail } from "../pages/TodoDetail";
import { ROOT_URL, TODO_DETAIL } from "./routesConst";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROOT_URL} element={<Dashboard />} />
      <Route path={`${TODO_DETAIL}/:id`} element={<TodoDetail />} />
    </Routes>
  );
};

export default AppRoutes;
