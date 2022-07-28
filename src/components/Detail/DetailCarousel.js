import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const DetailCarousel = ({ data }) => {
  const modalImg = useRef(null);
  const modalContainer = useRef(null);
  const showModal = (src) => {
    modalContainer.current.classList.remove("hidden");
    modalImg.current.src = src;
  };
  const closeModal = () => {
    modalContainer.current.classList.add("hidden");
  };
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
          <div className="h-full overflow-hidden flex flex-col justify-center">
            <img
              src={item.url}
              alt={data.name}
              className="p-1 cursor-pointer relative"
              key={index}
              onClick={() => showModal(item.url)}
            />
          </div>
        ))}
      </Carousel>
      <div
        ref={modalContainer}
        className="hidden fixed top-0 left-0 z-1001 w-screen h-screen bg-black bg-opacity-80 flex justify-center items-center duration-500"
      >
        <div className="relative w-100 h-100 flex justify-center items-center">
          <button
            className="absolute z-1001 top-10 right-10 w-10 h-10  
                       bg-sky-800 hover:bg-black-500 text-white"
            onClick={closeModal}
          >
            X
          </button>

          <img
            ref={modalImg}
            className="md:h-screen object-contain p-10"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default DetailCarousel;
