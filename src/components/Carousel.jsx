// Carousel.jsx
import React from "react";
import BlogPost from "./BlogPost";

const MyCarousel = ({ items }) => {
  return (
    <div className="carousel relative overflow-hidden bg-white shadow-lg">
      <div className="carousel-inner flex transition-transform ease-in-out duration-500">
        {items.map((item) => (
          <div
            key={item.id}
            className="carousel-item w-full flex-shrink-0 transform translate-x-full opacity-0"
          >
            <BlogPost
              title={item.title}
              date={item.date}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCarousel;
