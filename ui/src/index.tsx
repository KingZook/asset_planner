import { serve } from "bun";
import index from "./index.html";
import apiRoutes from "./api/api";

const uiRoutes = {
  // Serve index.html for all unmatched routes.
  "/*": index,
}
let appRoutes = {...uiRoutes, ...apiRoutes};
console.log(appRoutes)
const server = serve({
  routes: appRoutes,

  development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
