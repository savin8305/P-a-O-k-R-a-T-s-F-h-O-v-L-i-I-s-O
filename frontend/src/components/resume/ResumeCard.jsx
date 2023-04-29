import React from 'react';
import { Link } from "react-router-dom";
const ResumeCard = ({ title, subTitle, result, des, link }) => {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-22 -left-3 flex justify-center items-center bg-opacity-0">
          <span className="w-3 h-3 rounded-full inline-flex group-hover:bg-designColor1 duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-transparent duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
            <Link to="/projects">{result}</Link>
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {des}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="text-designColor" target="_blank" href={link}>
            link
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
