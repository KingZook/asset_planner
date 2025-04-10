import React from "react";
import { PAGE_TITLE } from "../index";


export default function Head() {

    return (
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/svg+xml" href="../assets/logo.svg" />
            <title>{PAGE_TITLE}</title>
        </head>
    )
}
