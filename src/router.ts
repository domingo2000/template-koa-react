import Router from "koa-router";

import apiRouter from "./routes/api";

const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = 'Hello World!';
  await next();
});

router.use('/api', apiRouter.routes(), apiRouter.allowedMethods());

export default router;