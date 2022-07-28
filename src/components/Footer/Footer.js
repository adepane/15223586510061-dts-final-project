import React from "react";
import { Link } from "react-router-dom";

const today = new Date();
const year = today.getFullYear();

const Footer = () => {
    return (
      <>
        <div className="p-6 container md:w-2/3 xl:w-auto mx-auto  flex flex-col xl:items-stretch justify-between xl:flex-row">
          <div className="w-full">
            <h1 className="text-2xl md:text-4xl font-poppins font-bold leading-10 text-gray-800 mb-4 text-center md:mt-0 mt-4">
              Get Offers and Updates
            </h1>
            <div className="flex items-stretch mt-12 justify-center">
              <input
                className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-full md:w-2/5 border border-transparent focus:outline-none focus:border-gray-500"
                type="email"
                placeholder="Your Email"
              />
              <button className="w-32 rounded-l-none hover:bg-sky-600 bg-sky-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-700">
                subscribe
              </button>
            </div>
          </div>
        </div>
        <footer className="p-4 pt-20 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link to={"/"} className="flex items-center mb-4 sm:mb-0">
              <img
                src="../../assets/images/footer.png"
                className="ml-3 h-14"
                alt="Boleh Travel"
              />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to={"/about"} className="mr-4 hover:underline md:mr-6">
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/adepane/15223586510061-dts-final-project"
                  className="mr-4 hover:underline md:mr-6 "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/adepane/"
                  className="mr-4 hover:underline md:mr-6 "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Created with ♡ by Ade Pane © {year} All Rights Reserved.
          </span>
        </footer>
      </>
    );
}
export default Footer