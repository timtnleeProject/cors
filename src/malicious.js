import Koa from 'koa';
import fs from "fs"
import path from "path";

const app = new Koa();

// log some info
app.use((ctx, next) => {
  // console.log(ctx.request.headers)
  ctx.body = fs.readFileSync(path.join(__dirname, "./index.html"), "utf-8");
});

export default app;
