import usersRouter from "@modules/users/infra/http/routes/users.routes";
import { Router } from "express";

const router = Router();

router.use("/v1", usersRouter);

export default router;
