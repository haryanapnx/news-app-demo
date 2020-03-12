// server.js
const next = require("next");
const routes = require("./routes/router");
const app = next({ dev: process.env.NODE_ENV !== "production" });
// With express
const handler = routes.getRequestHandler(app, ({ req, res, route, query }) => {
  app.render(req, res, route.page, query);
});
const express = require("express");


app.prepare().then(() => {
  express()
    .use(handler)
    .listen(3000);
});
