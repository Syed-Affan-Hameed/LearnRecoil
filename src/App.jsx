import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <></>;
  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        {count}
        <Increase setCount={setCount} />
        <Decrease setCount={setCount} />
      </div>
    );
  }
  function Increase() {
    return (
      <div>
        <button>Increase</button>
      </div>
    );
  }
  function Decrease() {
    return (
      <div>
        <button>Decrease</button>
      </div>
    );
  }
}

export default App;
