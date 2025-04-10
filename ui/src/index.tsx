import { serve } from "bun";
import index from "./index.html";
// import uiRoutes from "./ui";
// import apiRoutes from "./api/api";

export const PAGE_TITLE = "Asset Planner";

// let appRoutes = { "/*": index, ...uiRoutes, ...apiRoutes};
// console.log(appRoutes);

const server = serve({
  routes: { "/*": index},

  development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
