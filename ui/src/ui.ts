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
    "/dist/:file": async (req) => { return new Response(await Bun.file(`./dist/${req.params.file}`).bytes(), {
      headers: {
        "Content-Type": "text/javascript",
      },
    })
  },
  "/*": service,
}
  
export default uiRoutes;