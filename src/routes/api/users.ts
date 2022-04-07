import Router from "koa-router";
import { User, Trick } from "../../models/models";

const usersRouter = new Router();

// Get users
usersRouter.get("/", async (ctx, next) => {
  ctx.body = await User.findAll({
    include: [Trick]
  });
});

usersRouter.post("/", async (ctx, next) => {
  const user = await User.create(ctx.request.body);
  
  ctx.body = user;
});

export default usersRouter;