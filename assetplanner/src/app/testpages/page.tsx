
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "This is a new page title"
}

export default function testpage(){
    return (
        <>
            <p>This is the initial paragraph of the page lol</p>
        </>
    )
}