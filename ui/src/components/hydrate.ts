import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "../index.css";

import { Index } from "@/frontend";

hydrateRoot(document, Index());