import Koa from 'koa';
import Router from 'koa-router';

import logger from 'koa-logger';
import json from 'koa-json';

import koaBody from 'koa-body';

import router from './router';

const app = new Koa();

app.use(json());
app.use(logger());
// koa body url encoded
app.use(koaBody({ 
  // includeUnparsed: true, // for raw request body access
  multipart: true, // for multipart/form-data (includes images)
}));

app.use( async (ctx, next) => {
  console.log("######## REQUEST ########");
  console.log("BODY", ctx.request.body);
  console.log("PARAMS", ctx.request.query);
  console.log(ctx.request.files); // files access
  console.log("######################");
  await next();
});


app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
