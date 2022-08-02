import React from "react";

const Room = ({ rooms }) => {
  const sampleRoom = rooms.length > 0 ? rooms[0] : {};
  return (
    <div className="p-1 md:py-10 md:pb-2 md:px-10 pt-3 w-full">
      <h2 className="md:w-full text-left md:ml-10">
        <span className="bg-white px-3 text-2xl font-poppins font-extrabold">
          Picture of rooms
        </span>
      </h2>
      <div className="flex flex-col grid grid-cols-1 md:grid-cols-4 w-full px-4 md:px-10 gap-2">
        {sampleRoom.images.map((room, index) => (
          <div key={index} className="w-full p-1 md:p-2">
            <img
              src={room.url}
              alt={sampleRoom.name}
              className="block object-cover object-center w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Room;
