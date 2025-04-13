import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
// import ReactDOMServer from "react-dom/server";
import App from "@/App";
import { Index } from "@/frontend";

hydrateRoot(document, Index());