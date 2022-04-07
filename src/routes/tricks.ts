import Router from "koa-router";

const tricksRouter = new Router();

const tricks = {
  "1": {
    id: 1,
    name: "Backflip",
    description: "Flip backwards",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  "2": {
    id: 2,
    name: "Frontflip",
    description: "Flip forwards",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
}
// Get tricks
tricksRouter.get("/", async (ctx, next) => {
  ctx.body = tricks;
  await next();
});

export default tricksRouter;