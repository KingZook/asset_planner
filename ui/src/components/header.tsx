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
    const logo = "./assets/logo.svg";
    return (
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* <link rel="stylesheet" href="./src/index.css"/> */}
            <link rel="stylesheet" href="./dist/output.css"/>
            <link rel="icon" type="image/svg+xml" href={logo} />
        </head>
    );
}

