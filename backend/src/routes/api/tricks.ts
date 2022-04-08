import Router from "koa-router";
import { Trick } from "../../models/models";

const tricksRouter = new Router();

// Get tricks
tricksRouter.get("/", async (ctx, next) => {
  ctx.body = await Trick.findAll();
});

tricksRouter.post("/", async (ctx, next) => {
  const trick = await Trick.create(ctx.request.body);
  ctx.body = trick;
});

export default tricksRouter;