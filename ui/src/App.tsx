import "./index.css";
import { APITester } from "./APITester";

const logo = "./assets/logo.svg";
const reactLogo = "./assets/react.svg";

export function App() {
  return (
    <body>
        <h1 className="text-center align-super stroke-amber-500 text-5xl ">
            UP PLANNER
        </h1>
        <p className="editor-note text-center">
            This is where I <strong>will</strong> insert some data for user viewing <br/>
            Here is a list of planned features.
        </p>
        <ul>
          <li>Ability to filter out certain types of transfers from spending total</li>
          <li>
              Ability to categorize certain transfers (esp recurring ones) to be included or excluded from spending calculations</li>
        </ul>
        <p className="editor-note2 text-center">
        To find some more information on the connection of up services go to <a href="https://developer.up.com.au/" className="underline">UP</a>.
        </p>
        <br/>
        The api output of the up transaction data will be shown below from the rudimentary javascript file.
        <br/> <button id="api-button">Retrieve data</button>
        <br/> <span id="username"></span>
        <table id="insersion">

        </table>
      </body>
  );
}

export function oldApp() {
  return (
    <div className="max-w-7xl mx-auto p-8 text-center relative z-10">
      <div className="flex justify-center items-center gap-8 mb-8">
        <img
          src={logo}
          alt="Bun Logo"
          className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] scale-120 animate-[spin_20s_linear_infinite]"
        />
        <img
          src={reactLogo}
          alt="React Logo"
          className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-[spin_20s_linear_infinite]"
        />
      </div>

      <h1 className="text-5xl font-bold my-4 leading-tight" ><a  href="./uphomepage">Bun + React</a></h1>
      <p>
        Edit{" "}
        <code className="bg-[#1a1a1a] px-2 py-1 rounded font-mono">
          src/App.tsx
        </code>{" "}
        and save to test HMR
      </p>
      <APITester />
    </div>
  );
}

export default App;
