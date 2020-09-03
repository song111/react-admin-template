/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

export default function useWillUnmount(fn) {
  useEffect(() => {
    return fn;
  }, []);
}
