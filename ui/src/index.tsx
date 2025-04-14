import uiRoutes from "./ui";
import apiRoutes from "./api/api";
import { serverProps, service } from "./frontend";
import * as tw from "bun-plugin-tailwind";


var builds = await Bun.build({
  entrypoints: ['./src/components/hydrate.ts'],
  target: "browser",
  outdir: './dist',
  plugins: [tw.default] ,
  minify: true
});

var result = "";

console.log(result);

const buildRoutes = {};

builds.outputs.forEach( build =>
  {
    var dirs = Bun.pathToFileURL(build.path).pathname.split("/");
    const fname = dirs[dirs.length-1];
    var ct = build.type
    if (fname.split(".")[1] === "css"){
      ct = "text/css;" + build.type.split(";")[1];
    }
    console.log(dirs);
    console.log(ct);
    buildRoutes[`/dist/${dirs[dirs.length-1]}`] = async (req) => { return new Response(await Bun.file(build.path).bytes(), {
        headers: {
          "Content-Type": ct,
        }}); };
      }
    );
    
  // compile()
  
  const appRoutes = {  ...buildRoutes, ...uiRoutes, ...apiRoutes};
  // let appRoutes = { "/*": index, ...uiRoutes, ...apiRoutes};
  console.log(appRoutes);

export const server = Bun.serve({
  routes: appRoutes,
  // routes: {"/*": service},

  development: process.env.NODE_ENV !== "production",
});

serverProps.url = server.url.toString();

console.log(`🚀 Server running at ${server.url}`);
