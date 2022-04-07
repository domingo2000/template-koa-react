import Router from "koa-router";
import { IData } from "./interfaces";
import Trick from "../../models/tricks";

const tricksRouter = new Router();

interface ITrick {
  id: number;
  name: string;
  description: string;
  video: string;
}

interface ITrickData extends IData {
  [key: string]: ITrick;
}

const tricks : ITrickData = {
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
tricksRouter.get("/", async (ctx : any, next) => {
  ctx.body = await Trick.findAll();
  await next();
});

tricksRouter.post("/", async (ctx, next) => {
  console.log(ctx.request.body);
  const trick = ctx.request.body;
  const id = Object.keys(tricks).length + 1;
  trick.id = id;
  tricks[id] = trick;
  ctx.body = trick;
  await next();
});

export default tricksRouter;