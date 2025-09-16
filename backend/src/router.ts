import { Router, } from "express";
import {getAll, deleteUser} from "./controller.js"

const router = Router();

router.get("/users",getAll)
router.delete("users/:id", deleteUser)

export default router