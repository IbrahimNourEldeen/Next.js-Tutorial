"use client";

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);
  return (
    <div className="text-3xl flex justify-center my-5">
      <button onClick={() => setCount(count - 1)}>-</button>
      <h1 className="mx-5 bg-gray-500 p-3 rounded-2xl">{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
