import React, { useState } from 'react';
import styled from 'styled-components';

// --- Ícones (Caminhos relativos à pasta src/components) ---
import ArrowLeft from '../assets/arrow-left.svg';
import ArrowRight from '../assets/arrow-right.svg';

// --- Estilos ---
const GalleryWrapper = styled.div`
  width: ${props => props.width || '100%'};
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

const MainSlide = styled.div`
  width: 100%;
  height: ${props => props.height || '681px'};
  position: relative;
  overflow: hidden;
  border-radius: ${props => props.radius || '0px'};
  background-color: #F5F5F5;
`;

const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  transition: transform 0.4s ease-in-out;
  transform: translateX(-${props => props.$activeIndex * 100}%);
`;

const SlideImage = styled.img`
  min-width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;
  
  &:disabled {
    opacity: 0;
    cursor: not-allowed;
  }

  &.left { left: 20px; }
  &.right { right: 20px; }
`;

const ThumbsContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  overflow-x: auto;
  padding: 10px 0;
`;

const ThumbImage = styled.img`
  width: 117px;
  height: 95px;
  object-fit: cover;
  border-radius: ${props => props.radius || '0px'};
  cursor: pointer;
  border: 2px solid ${props => props.active ? '#C92071' : 'transparent'};
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(0.8);
  }
`;

// --- Componente Principal ---
const Gallery = ({
  images = [],
  width,
  height,
  radius,
  showThumbs,
  className
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    if (activeIndex < images.length - 1) setActiveIndex(activeIndex + 1);
  };

  const prevSlide = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  if (!images.length) return null;

  return (
    <GalleryWrapper width={width} className={className}>
      <MainSlide height={height} radius={radius}>
        <Arrow
          className="left"
          onClick={prevSlide}
          disabled={activeIndex === 0}
        >
          <img src={ArrowLeft} alt="Anterior" />
        </Arrow>

        <Arrow
          className="right"
          onClick={nextSlide}
          disabled={activeIndex === images.length - 1}
        >
          <img src={ArrowRight} alt="Próximo" />
        </Arrow>

        <ImageContainer $activeIndex={activeIndex}>
          {images.map((img, index) => (
            <SlideImage
              key={index}
              src={img.src}
              alt={`Slide ${index}`}
            />
          ))}
        </ImageContainer>
      </MainSlide>

      {showThumbs && (
        <ThumbsContainer>
          {images.map((img, index) => (
            <ThumbImage
              key={index}
              src={img.src}
              radius={radius}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </ThumbsContainer>
      )}
    </GalleryWrapper>
  );
};

export default Gallery;