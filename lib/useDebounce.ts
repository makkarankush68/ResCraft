import { useState } from 'react';

const useDebounce = (func: () => unknown, timeout: number) => {
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  let t: NodeJS.Timeout;
  return (...args: unknown[]) => {
    clearTimeout(timer);
    t = setTimeout(() => {
      func(...(args as []));
    }, timeout);
    setTimer(t);
  };
};

export default useDebounce;
