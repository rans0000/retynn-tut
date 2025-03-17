import { useState } from "react";

export function useTimer(interval: number) {
  const [a, setA] = useState(0);

  const updateValue = (num: number) => {
    setA(num);
  };

  setTimeout(() => {
    setA((prev) => prev + 1);
  }, interval);

  return { a, updateValue };
}
