import Router from "koa-router";
import { Trick } from "../../models/models";

const tricksRouter = new Router();

tricksRouter.param("id", async (id, ctx, next) => {
  const trick = await Trick.findByPk(id);
  if (trick) {
    ctx.state.trick = trick;
    return next();
  }
  ctx.throw(404, "Trick not found");
});

// GET /api/tricks
tricksRouter.get("/", async (ctx, next) => {
  ctx.body = await Trick.findAll();
});

// GET /api/tricks/:id
tricksRouter.get("/:id", async (ctx, next) => {
  const { trick } = ctx.state;
  ctx.body = trick;
});

// POST /api/tricks
tricksRouter.post("/", async (ctx, next) => {
  try {
    const trick = await Trick.create(ctx.request.body);
    ctx.body = trick;
  } catch (err) {
    ctx.status = 400;
    ctx.body = err;
  }
});

// UPDATE /api/tricks/:id
tricksRouter.put("/:id", async (ctx, next) => {
  const { trick } = ctx.state;

  try {
      await trick.update(ctx.request.body);
      ctx.body = trick;
  } catch (err) {
    ctx.status = 400;
    ctx.body = err;
  }
});

// DELETE /api/tricks/:id
tricksRouter.delete("/:id", async (ctx, next) => {
  const { trick } = ctx.state;
  try {
    await trick.destroy();
    ctx.body = trick;
  } catch (err) {
    ctx.status = 400;
    ctx.body = err;
  }
});

export default tricksRouter;