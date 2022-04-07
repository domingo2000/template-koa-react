import Router from "koa-router";
import tricksRouter from "./api/tricks";

const apiRouter = new Router();

apiRouter.use("/tricks", tricksRouter.routes(), tricksRouter.allowedMethods());

export default apiRouter;
