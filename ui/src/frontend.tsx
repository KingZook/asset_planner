/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { renderToReadableStream } from "react-dom/server";
import { App } from "./App";
import Head from "./components/header";
import Retrieve from "./components/retrieval";

export const serverProps = { url: ""};

export function Index(){
  return(
  <>
    <div>
      <Retrieve/>
      {/* <App/> */}
    </div>
  </>
  );
}


// function start() {
//   const root = renderToReadableStream(document.getElementById('root'));
//   root.render(<App />);
// }



// if (document.readyState === "loading") {
//   document.addEventListener("DOMContentLoaded", start);
// } else {
//   start();
// }

export async function service() {
  const stream = await renderToReadableStream(
    Index(), {bootstrapScripts: ["./dist/hydrate.js"]},
  ); 
  return new Response(stream, {
    headers: { "Content-Type": "text/html" },
  });
}



