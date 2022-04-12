import Router from "koa-router";
import { Trick } from "../../models/models";

const tricksRouter = new Router();

// GET /api/tricks
tricksRouter.get("/", async (ctx, next) => {
  ctx.body = await Trick.findAll();
});

// GET /api/tricks/:id
tricksRouter.get("/:id", async (ctx, next) => {
  ctx.body = await Trick.findAll();
});

// POST /api/tricks
tricksRouter.post("/", async (ctx, next) => {
  const trick = await Trick.create(ctx.request.body);
  ctx.body = trick;
});

// UPDATE /api/tricks/:id
tricksRouter.put("/:id", async (ctx, next) => {
  const trick = await Trick.findByPk(ctx.params.id);
  await trick.update(ctx.request.body);
  ctx.body = trick;
});

// DELETE /api/tricks/:id
tricksRouter.delete("/:id", async (ctx, next) => {
  const trick = await Trick.findByPk(ctx.params.id);
  await trick.destroy();
  ctx.body = trick;
});

export default tricksRouter;