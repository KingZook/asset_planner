import uphomepage from "./uphomepage";
// import { start } from "./frontend";
import { service } from "./frontend";

export const PAGE_TITLE = "Asset Planner";

const uiRoutes = {
    // Serve index.html for all unmatched routes.
    // "/uphomepage": uphomepage(),
    "/assets/:name": async (req) => { return new Response(await Bun.file(`./src/assets/${req.params.name}`).bytes(), {
      headers: {
        "Content-Type": "image/svg+xml",
      },
    })
  },
    "/dist/output.css": async (req) => { return new Response(Bun.file("./dist/output.css"));},
    
  "/*": service,
}

export default uiRoutes;