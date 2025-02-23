import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "../Modal/Modal";

const DetailCarousel = ({ data }) => {
  const [open, setOpen] = useState({open: false, source: ""});

  const handleClick = (src) => {
    setOpen({open: true, source: src});
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
            className="h-full overflow-hidden flex flex-col justify-center cursor-pointer"
            key={index}
            onClick={() => handleClick(item.url)}
          >
            <img
              src={item.url}
              alt={data.name}
              className="p-1 relative"
              key={index}
            />
            <div className="absolute w-full h-full flex flex-col justify-center">
              <div
                className="flex flex-row justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-10 h-10 opacity-60 color-white"
                >
                  <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7c-12.23-91.55-87.28-166-178.9-177.6c-136.2-17.24-250.7 97.28-233.4 233.4c11.6 91.64 86.07 166.7 177.6 178.9c53.81 7.191 104.3-6.235 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 .0003C515.9 484.7 515.9 459.3 500.3 443.7zM288 232H231.1V288c0 13.26-10.74 24-23.1 24C194.7 312 184 301.3 184 288V232H127.1C114.7 232 104 221.3 104 208s10.74-24 23.1-24H184V128c0-13.26 10.74-24 23.1-24S231.1 114.7 231.1 128v56h56C301.3 184 312 194.7 312 208S301.3 232 288 232z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <Modal state={open} />
    </div>
  );
};
export default DetailCarousel;
