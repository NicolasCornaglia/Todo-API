import { Router } from "express";
import { createTodo, getTodos, updateTodo, deletedTodo } from "../controllers/todos";

const router = Router();

router.post('/', createTodo);

router.get('/', getTodos);

router.patch('/:id', updateTodo);

router.delete('/:id', deletedTodo);

export default router;

