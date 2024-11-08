import { useState } from "react";
import "./App.css";

function App() {

 
  return <>
  <Counter></Counter>
  </>;
 function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CurrentCount count ={count}/>
      <Increase setCount={setCount} />
      <Decrease setCount={setCount} />
    </div>
  );
}

function CurrentCount({count})
{
  return(
    <div>
      {count}
    </div>
  )
}

  function Increase({setCount}) {

    //simpler more intuitive approach
    // function decreaseCount() {
    //   setCount(count - 1);
    // }

    // return (
    //   <div>
    //     <button onClick={decreaseCount}>Decrease</button>
    //   </div>
    // );

    return (
      <div>
        <button onClick={() => setCount(count=>count + 1)}>Increase</button>
      </div>
    );
  }
  function Decrease({setCount}) {

    //simpler more intuitive approach
    // function decreaseCount() {
    //   setCount(count - 1);
    // }

    // return (
    //   <div>
    //     <button onClick={decreaseCount}>Decrease</button>
    //   </div>
    // );


    //pro code
    return (
      <div>
        <button onClick={() => setCount(count=>count - 1)}>Decrease</button>
      </div>
    );
  }
}

export default App;
