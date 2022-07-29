import React from "react";
import Carousel from "react-multi-carousel";
import Card from "../Card/Card";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const Discover = ({ data, title }) => {

  const carouselData = data.filter((item) => item.images.length > 0);

  return (
    <div className="p-1 md:py-5 md:px-10 pt-3 w-full">
      <h2 className="md:w-full text-left px-8">
        <span className="bg-white text-2xl font-poppins font-extrabold">
          {title}
        </span>
      </h2>
      <div className="w-full w-full h-full -mt-4 px-5 pt-5 md:border-t md:border-gray-400 md:rounded-md overflow-hidden">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="flex w-full"
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
              slidesToSlide: 3, // optional, default to 1.
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
          {carouselData.map((item, index) => (
            <Link
              to={`/hotel/${item.address.country}/${item.hotelId}?lat=${item.location.latitude}&lon=${item.location.longitude}`}
              className="scale-50 hover:scale-175 ease-in duration-500"
              key={index}
              state={item}
            >
              <Card
                title={item.name.replace("[SANDBOX]", "")}
                img={item.images[0].url}
                desc={item.desc}
                rating={item.starRating}
                rooms={item.roomCount}
                roomType={item.roomTypes.length}
                country={item.address.city}
                currency={item.currency}
                key={index}
              />
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default Discover;
