import React from "react";
import { PAGE_TITLE } from "../ui";
import { useEffect } from "react";

export function setTitle(title){
    useEffect( ()=> {
        document.title = title;
    }, [title]);
}

export default function Head() {
    setTitle(PAGE_TITLE);
    return (
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/svg+xml" href="../assets/logo.svg" />
        </head>
    );
}

