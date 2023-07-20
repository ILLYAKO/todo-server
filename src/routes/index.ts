import { Router } from "express";
import {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    deleteAll,
} from "../controllers/todos";

const router: Router = Router();

router.get("/todos", getTodos);

router.post("/add-todo", addTodo);

router.put("/edit-todo/:id", updateTodo);

router.delete("/delete-todo/:id", deleteTodo);

router.delete("/delete-all", deleteAll);

export default router;
