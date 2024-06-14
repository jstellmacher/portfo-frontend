// Carousel.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = ({ items }) => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      emulateTouch={true}
      swipeable={true}
      dynamicHeight={true}
    >
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.imageUrl} alt={item.title} />
          <p className="legend">{item.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
