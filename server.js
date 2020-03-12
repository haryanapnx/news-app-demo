// server.js
const next = require("next");
// const path = require("path");
// const url = require("url");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const routes = require("./routes/router");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;


if (!dev && cluster.isMaster) {
  console.log(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.error(
      `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
    );
  });
} else {
  const express = require("express");
  if (!dev) {
    // Enforce SSL & HSTS in production
    server.use(function(req, res, next) {
      var proto = req.headers["x-forwarded-proto"];
      if (proto === "https") {
        res.set({
          "Strict-Transport-Security": "max-age=31557600" // one-year
        });
        return next();
      }
      res.redirect("https://" + req.headers.host + req.url);
    });
  }
  const app = next({ dev });
  // With express
  const handler = routes.getRequestHandler(app, ({ req, res, route, query }) => {
    app.render(req, res, route.page, query);
  });
  
  app.prepare().then(() => {
    express()
      .use(handler)
      .listen(port);
  });
  
}
