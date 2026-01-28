import { useState, useCallback } from 'react';
import type { CardPosition } from './types';

// Hook pour gérer le carrousel des projets
export const useCarousel = (itemCount: number) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const nextProject = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % itemCount);
  }, [itemCount]);

  const prevProject = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + itemCount) % itemCount);
  }, [itemCount]);

  const selectProject = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const getCardStyle = useCallback((index: number): CardPosition => {
    const distance = index - activeIndex;

    if (distance === 0) {
      return 'active';
    }
    if (distance === -1) {
      return 'prev';
    }
    if (distance === 1) {
      return 'next';
    }
    if (distance < -1) {
      return 'hidden-left';
    }
    if (distance > 1) {
      return 'hidden-right';
    }
    return 'hidden';
  }, [activeIndex]);

  return {activeIndex, nextProject, prevProject, selectProject, getCardStyle,};
};
