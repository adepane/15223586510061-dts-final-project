import React from "react";
import { Link } from "react-router-dom";

const today = new Date();
const year = today.getFullYear();

const Footer = () => {
    return (
      <>
        <footer className="p-4 pt-20 bg-gray-900 shadow md:px-6 md:py-8">
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