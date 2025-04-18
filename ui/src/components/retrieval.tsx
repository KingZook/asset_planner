import { useState } from "react";

export default function Retrieve(){
    let [message, setMsg] = useState("");

    const sayHi = () => { setMsg(": hi"); }
    
    return (
        <button onClick={sayHi} className="m-20 bg-white text-2xl font-black text-black rounded-2xl -space-y-96 -space-x-96 border-amber-600 border-2 margin hover:opacity-50 " type="button">say{message}</button>
    );
}