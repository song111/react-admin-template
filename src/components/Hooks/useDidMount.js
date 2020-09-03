import { useEffect } from 'react';

export default function useDidMount(fn) {
  useEffect(() => {
    fn();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
