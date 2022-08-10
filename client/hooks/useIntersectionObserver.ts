import { useCallback, useEffect, useRef, useState } from "react";

type Result<T> = (node: T | null) => void;

export function useIntersectionObserver<T extends HTMLElement>(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): Result<T> {
  const [target, setTarget] = useState<T | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const subscribe = useCallback((node: T | null) => {
    if (node) {
      observer.current?.observe(node);
      setTarget(node);
    }
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(callback, options);
    subscribe(target);

    return () => {
      observer.current?.disconnect();
      observer.current = null;
    };
  }, [callback, options, subscribe, target]);

  return subscribe;
}
