import React, { useEffect, useRef } from "react";

const Modal = (props) => {
    const modalImg = useRef(null);
    const modalContainer = useRef(null);

    useEffect(() => {
      if (!props.state) return;
      modalContainer.current.classList.remove("hidden");
      modalImg.current.src = props.source;
    }, [props.state, props.source]);

    const closeModal = () => {
      modalContainer.current.classList.add("hidden");
    };

    return (
        <div
          ref={modalContainer}
          className="hidden fixed top-0 left-0 z-1001 w-screen h-screen bg-black bg-opacity-80 flex justify-center items-center"
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
    );
}
export default Modal;