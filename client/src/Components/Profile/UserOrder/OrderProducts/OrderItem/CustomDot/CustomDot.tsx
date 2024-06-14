import React from 'react';
import { CarouselInternalState, CarouselProps } from 'react-multi-carousel';

interface CustomDotProps {
  onClick?: () => void;
  active?: boolean;
}

const CustomDot: React.FC<CustomDotProps> = ({ onClick, active }) => {
  return (
    <li
      className={`custom-dot ${active ? 'active' : ''}`}
      onClick={onClick}
      style={{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        background: active ? '#000' : '#ccc',
        margin: '0 8px',
        cursor: 'pointer',
        top: "10px",
        position: "relative"
      }}
    />
  );
};

export default CustomDot;
