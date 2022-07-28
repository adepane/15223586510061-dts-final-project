import React from "react";

const DetailMaps = ({ latitude, longitude }) => {
  const scrMap = `https://www.google.com/maps/embed/v1/view?key=${process.env.REACT_APP_API_MAPS}&center=${latitude},${longitude}&zoom=18
  &maptype=satellite`;
  return (
    <div className="w-full h-74 px-4 md:px-20 -mt-32">
      <iframe
        src={scrMap}
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        width="100%"
        height="300"
        frameborder="0"
        style={{ border: 0 }}
        title="map"
      ></iframe>
    </div>
  );
};
export default DetailMaps;
