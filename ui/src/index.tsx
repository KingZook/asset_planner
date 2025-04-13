import uiRoutes from "./ui";
import apiRoutes from "./api/api";
import { serverProps, service } from "./frontend";


const appRoutes = {  ...uiRoutes, ...apiRoutes};
// let appRoutes = { "/*": index, ...uiRoutes, ...apiRoutes};
console.log(appRoutes);

var builds = await Bun.build({
  entrypoints: ['./src/components/hydrate.ts'],
  target: "browser",
  outdir: './dist',
  minify: true
});

const buildRoutes = {};

builds.outputs.forEach( build =>
  {
    var dirs = build.path.split("\\");
    console.log(dirs[dirs.length-1]);
    buildRoutes[`/dist/${dirs[dirs.length-1]}`] = async (req) => { return new Response(await Bun.file(build.path).bytes(), {
        headers: {
          "Content-Type": build.type,
        }}); };
  }
);

console.log(buildRoutes);

export const server = Bun.serve({
  routes: appRoutes,
  // routes: {"/*": service},

  development: process.env.NODE_ENV !== "production",
});

serverProps.url = server.url.toString();

console.log(`🚀 Server running at ${server.url}`);
