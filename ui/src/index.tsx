import { serve } from "bun";
import index from "./index.html";
import uiRoutes from "./ui";
import apiRoutes from "./api/api";

let appRoutes = { "/*": index, ...uiRoutes, ...apiRoutes};
console.log(appRoutes);

const server = serve({
  routes: appRoutes,

  development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
