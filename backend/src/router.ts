import Router from 'koa-router';

import apiRouter from './routes/api';

const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = 'Hello World!';
  await next();
});

// Unparsed body request access
// const unparsed = require("koa-body/unparsed.js");
// router.post('/unparsed', async (ctx, next) => {
//   const unparsedBody = ctx.request.body[unparsed];
//   console.log("######## Unparsed ########");
//   console.log(unparsedBody);
//   console.log("######## Unparsed ########");
//   ctx.body = unparsedBody;
// });

router.post('/', async (ctx, next) => {
  ctx.body = ctx.request.body;
});

router.use('/api', apiRouter.routes(), apiRouter.allowedMethods());

export default router;