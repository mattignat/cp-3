"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleStepChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    if (Number.isNaN(value)) {
      setStep(1);
    } else {
      setStep(value);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h2 className="text-2xl font-semibold">Count: {count}</h2>

      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setCount(count + step)}
        >
          +{step}
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => setCount(count - step)}
        >
          -{step}
        </button>

        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="step-input" className="font-medium">
          Step:
        </label>
        <input
          id="step-input"
          type="number"
          className="border rounded px-2 py-1 w-16 text-center"
          value={step}
          onChange={handleStepChange}
        />
      </div>
    </div>
  );
}
