import uiRoutes from "./ui";
import apiRoutes from "./api/api";
import { serverProps, service } from "./frontend";
import * as tw from "bun-plugin-tailwind";

declare global {
  var client: ReadableStreamDefaultController | undefined;
}

globalThis.client?.enqueue("data:\n\n");

console.log(globalThis.client);

var builds = await Bun.build({
  entrypoints: ['./src/components/hydrate.ts', './src/components/dev_reload.js'],
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
    if (fname.split(".")[1] === "js"){
      ct = "text/javascript;" + build.type.split(";")[1];
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
  const fastLoadRoutes = {...appRoutes, "/__maxs_live_reload": async (req) => {
    let stream = new ReadableStream({
      start(client){
        globalThis.client = client;
      }
    })
    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache"
      }
    });
  }
};
  
export const server = Bun.serve({
  routes: fastLoadRoutes,
  // routes: {"/*": service},

  development: process.env.NODE_ENV !== "production",
});

serverProps.url = server.url.toString();

console.log(`🚀 Server running at ${server.url}`);
