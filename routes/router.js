const routes = module.exports = require("next-routes")();
routes
//   .add("user", "/user/:id", "profile")
//   .add("/:noname/:lang(en|es)/:wow+", "complex")
  .add({ name: "home", pattern: "/", page: "index" })
  .add({ name: "category", pattern: "/category/:slug", page: "category" })
