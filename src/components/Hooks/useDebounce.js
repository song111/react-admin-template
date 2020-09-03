import { useRef, useCallback } from 'react';
import useWillUnmount from './useWillUnmount';

/** 防抖
 * @param {Function} fn
 * @param {Number} wait
 * @returns {Function}
 */

export default function useDebounce(fn, wait = 0) {
  const timerRef = useRef(0);

  const cancel = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = 0;
    }
  }, []);

  const callback = useCallback(
    (...args) => {
      cancel();
      timerRef.current = setTimeout(fn, wait, ...args);
    },
    [cancel, fn, wait]
  );

  useWillUnmount(cancel);

  return callback;
}
