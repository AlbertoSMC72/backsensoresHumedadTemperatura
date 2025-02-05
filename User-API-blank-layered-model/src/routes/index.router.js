import { Router } from "express";
import usersRouter from "./user.route.js"
import loguinRouter from "./auth.route.js"
import dataRouter from "./data.route.js"

const router = Router();
const prefijo = "app";


router.use(`/${prefijo}/user`, usersRouter)
router.use(`/${prefijo}/auth`, loguinRouter);
router.use(`/${prefijo}/data`, dataRouter)

export default router;
