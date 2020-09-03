import { useState, useEffect, useCallback, useRef } from 'react';

export default function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  const rafRef = useRef(0);

  const handleWindowSizeChange = useCallback(() => {
    // 窗口大小改变更新size
    cancelAnimationFrame(rafRef.current);
    // requestAnimationFrame 优化性能
    rafRef.current = requestAnimationFrame(() => {
      setSize([window.innerWidth, window.innerHeight]);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [handleWindowSizeChange]);

  return size;
}
