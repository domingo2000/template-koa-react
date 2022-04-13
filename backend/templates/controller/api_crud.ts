import Router from "koa-router";
import { _Resource } from "../../models/models";

const _resourcesRouter = new Router();

_resourcesRouter.param("id", async (id, ctx, next) => {
  const _resource = await _Resource.findByPk(id);
  if (_resource) {
    ctx.state._resource = _resource;
    return next();
  }
  ctx.throw(404, "_Resource not found");
});

// GET /api/_resources
_resourcesRouter.get("/", async (ctx, next) => {
  ctx.body = await _Resource.findAll({ where: ctx.request.query });
});

// GET /api/_resources/:id
_resourcesRouter.get("/:id", async (ctx, next) => {
  const { _resource } = ctx.state;
  ctx.body = _resource;
});

// POST /api/_resources
_resourcesRouter.post("/", async (ctx, next) => {
  try {
    const _resource = await _Resource.create(ctx.request.body);
    ctx.body = _resource;
  } catch (err) {
    ctx.status = 400;
    ctx.body = err;
  }
});

// UPDATE /api/_resources/:id
_resourcesRouter.put("/:id", async (ctx, next) => {
  const { _resource } = ctx.state;

  try {
      await _resource.update(ctx.request.body);
      ctx.body = _resource;
  } catch (err) {
    ctx.status = 400;
    ctx.body = err;
  }
});

// DELETE /api/_resources/:id
_resourcesRouter.delete("/:id", async (ctx, next) => {
  const { _resource } = ctx.state;
  try {
    await _resource.destroy();
    ctx.status = 204;
  } catch (err) {
    ctx.status = 400;
    ctx.body = err;
  }
});

export default _resourcesRouter;