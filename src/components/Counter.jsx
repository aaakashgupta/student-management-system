import React, { useState } from "react";

function Counter() {
  //state
  const [count, setCount] = useState(0);

  //ui
  return (
    <div className="h-screen flex flex-col gap-2 justify-center items-center">
      <h1 className="text-3xl font-bold">Counter :{count}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Change Count
      </button>
    </div>
  );
}

export default Counter;
