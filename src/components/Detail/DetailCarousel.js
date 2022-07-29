import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "../Modal/Modal";

const DetailCarousel = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState("");

  const handleClick = (src) => {
    setOpen(true);
    setSource(src)
  }
  
  return (
    <div className="relative w-full h-72 px-5 md:px-20">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={true}
        className="relative flex h-1/2 overflow-hidden"
        containerClass="carousel-container"
        dotListClass=""
        draggable={false}
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={100}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            slidesToSlide: 3,
          },
          mobile: {
            breakpoint: {
              max: 600,
              min: 0,
            },
            items: 1,
          },
        }}
      >
        {data.images.map((item, index) => (
          <div
            className="h-full overflow-hidden flex flex-col justify-center"
            key={index}
          >
            <img
              src={item.url}
              alt={data.name}
              className="p-1 cursor-pointer relative"
              key={index}
              onClick={() => handleClick(item.url)}
            />
          </div>
        ))}
      </Carousel>
      <Modal state={open} source={source} />
    </div>
  );
};
export default DetailCarousel;
