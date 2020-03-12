// server.js
const next = require("next");
const routes = require("./routes/router");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;

const app = next({ dev });
// With express
const handler = routes.getRequestHandler(app, ({ req, res, route, query }) => {
  app.render(req, res, route.page, query);
});
const express = require("express");


app.prepare().then(() => {
  express()
    .use(handler)
    .listen(port);
});
