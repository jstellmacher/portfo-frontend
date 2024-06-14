// Carousel.jsx
import React from "react";
import BlogPost from "./BlogPost";

const MyCarousel = ({ items }) => {
  return (
    <div className="carousel">
      {items.map((item) => (
        <div key={item.id} className="carousel-item">
          <BlogPost
            title={item.title}
            date={item.date}
            description={item.description}
          />
        </div>
      ))}
    </div>
  );
};

export default MyCarousel;
