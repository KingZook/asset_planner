

import { Index } from "@/frontend";
import Head from "./header";


function liveReload() {

}

export default function fullFrontend(){


    return (
        <>
            <script async={true} src="./dist/dev_reload.js" />
            <Head/>
            <html>
                <body>            
                    <Index/>
                </body>
            </html>
        </>
    );
}