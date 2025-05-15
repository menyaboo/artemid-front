import { useEffect, useState } from "react";

const useDelay = (value: boolean, delay: number): boolean => {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return delayedValue;
};

export { useDelay };