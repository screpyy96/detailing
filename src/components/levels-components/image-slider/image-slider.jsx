import React, { useState, useRef, useEffect, useCallback, useMemo, useLayoutEffect } from 'react';

const imageSliderStyles = {
  container: {
    position: 'relative',
    height: 400,
    width: "100%",
    backgroundColor: '#f0f0f0',
    marginBottom: "2rem"
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  leftImage: {
    left: 0,
  },
  rightImage: {
    right: 0,
  },
  dragLine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 3,
    backgroundColor: 'red',
    zIndex: 2,
    cursor: 'ew-resize',
    borderLeft: '1px solid #000', // Added border for better visibility
    borderRight: '1px solid #000',
  },
  text: { // added new style for text
    position: 'absolute',
    top: 0,
    padding: '0 10px',
    color: '#fff',
    fontWeight: 'bold',
  },
};

function ImageSlider({ beforeImageSrc, afterImageSrc }) {
  const [isDragging, setIsDragging] = useState(false);
  const [linePosition, setLinePosition] = useState(0);
  const containerRef = useRef(null);

  const handleMouseDown = useCallback((event) => {
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback((event) => {
    const containerWidth = containerRef.current.offsetWidth;
    const newPosition = event.clientX - containerRef.current.getBoundingClientRect().left;
    const newLinePosition = Math.max(0, Math.min(newPosition, containerWidth));
    setLinePosition(newLinePosition);
  }, []);

  const handleMouseUp = useCallback((event) => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  useLayoutEffect(() => {
    if (containerRef.current) {
      setLinePosition(containerRef.current.offsetWidth / 2);
    }
  }, []);

  const beforeImageStyle = useMemo(() => ({
    ...imageSliderStyles.image,
    ...imageSliderStyles.leftImage,
    width: `${linePosition}px`,
    backgroundImage: `url(${beforeImageSrc})`,
  }), [linePosition, beforeImageSrc]);

  const afterImageStyle = useMemo(() => ({
    ...imageSliderStyles.image,
    ...imageSliderStyles.rightImage,
    width: `${containerRef.current ? containerRef.current.offsetWidth - linePosition : 0}px`,
    backgroundImage: `url(${afterImageSrc})`,
  }), [linePosition, afterImageSrc]);

  const lineStyle = useMemo(() => ({
    ...imageSliderStyles.dragLine,
    left: `${linePosition}px`,
  }), [linePosition]);

  return (
    <div className="image-slider-container" ref={containerRef} style={imageSliderStyles.container}>
      <div className="image-slider-image" style={beforeImageStyle}>
        <div style={{...imageSliderStyles.text, left: '0'}}>inainte</div> {/* added left text */}
      </div>
      <div className="image-slider-line" style={lineStyle} onMouseDown={handleMouseDown}></div>
      <div className="image-slider-image" style={afterImageStyle}>
        <div style={{...imageSliderStyles.text, right: '0'}}>dupa</div> {/* added right text */}
      </div>
    </div>
  );
}

export default ImageSlider;
