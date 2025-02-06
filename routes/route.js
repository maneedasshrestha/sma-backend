import { Router } from "express";
import authRouter from "./auth.route.js";
import authentication from "../middlewares/authentication.js"


const router = Router();

router.use("/auth",authRouter)
router.use(authentication);

export default router;