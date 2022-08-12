import { useIntersectionObserver } from './useIntersectionObserver';
import { useCallback } from 'react';

export function useInfiniteScroll<T extends HTMLElement>(
  onLoadMore: () => unknown,
  options?: IntersectionObserverInit
) {
  const subscriber = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      console.log('entry', entry);
      if (!entry?.isIntersecting) {
        return;
      }
      onLoadMore();
    },
    [onLoadMore]
  );

  return useIntersectionObserver<T>(subscriber, options);
}
