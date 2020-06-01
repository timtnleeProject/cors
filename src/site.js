import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();
// memory
const articles = [{
  title: "First Post"
}];

app.use(bodyParser());
// log some info
app.use((ctx, next) => {
  // console.log(ctx.request.headers)
  next();
});

router.get("/", ctx => {
  console.log("I got Hit")
  ctx.body = "Hello"
});

router.get("/allow", ctx => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.body = "Hello"
})

router.get("/articles", ctx => {
  ctx.body = articles;
})
router.post("/article", ctx => {
  console.log("Add new Article!");
  const article = ctx.request.body;
  console.log(article)
  articles.push(article)
  ctx.body = "OK"
})

app.use(router.routes())
app.use(router.allowedMethods());

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

export default app;
