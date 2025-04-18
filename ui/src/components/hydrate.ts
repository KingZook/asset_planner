import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "../index.css";
import * as Root from "./dev_reload";


hydrateRoot(document, Root.default());