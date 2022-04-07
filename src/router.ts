import Router from "koa-router";

import tricksRouter from "./routes/tricks";

const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = 'Hello World!';
  await next();
});

router.use('/tricks', tricksRouter.routes(), tricksRouter.allowedMethods());

export default router;