import React from 'react';

interface CarouselIndicatorsProps {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}

export const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({count, activeIndex, onSelect,}) => {
  return (
    <div className="carousel-indicators">
      {Array.from({ length: count }).map((_, index) => (
        <button key={index} className={`indicator-dot ${index === activeIndex ? 'active' : ''}`} onClick={() => onSelect(index)} aria-label={`Aller au projet ${index + 1}`}/>
      ))}
    </div>
  );
};
