

import React from "react";
import na from "./na.jpg"
import notA from "./notA.jpg";
import { useNavigate } from "react-router-dom";
export default function Card({ title, subTitle, description, technologies, url, image }) {
    const navigate = useNavigate();
    return (
        <div>
            <div className="movie_card" id="bright"
             >
                <div className="info_section"
                >
                    <div className="movie_header"
                     onMouseMove={(event) => {
                        const x = event.nativeEvent.offsetX;
                        const y = event.nativeEvent.offsetY;
                        const centerX = event.target.clientWidth / 2;
                        const centerY = event.target.clientHeight / 2;
                        const deltaX = centerX /2- x;
                        const deltaY = centerY/6 - y;
                        event.target.style.transform = `perspective(1000px) rotateX(${deltaY /
                          5}deg) rotateY(${deltaX /95}deg) translateZ(20px)`;
                      }}>
                        {image && image ? (
                            <img className="locandina" src={image} />
                        ) : (
                            <img src={na} className="locandina" />
                        )}
                        <h1 className="font-bold text-2xl">{title}</h1>
                        <h4>
                            {subTitle}
                        </h4>
                        <div className="minutes  relative">


                        </div>
                    </div>
                    <div 
                     onMouseMove={(event) => {
                        const x = event.nativeEvent.offsetX;
                        const y = event.nativeEvent.offsetY;
                        const centerX = event.target.clientWidth / 2;
                        const centerY = event.target.clientHeight / 2;
                        const deltaX = centerX /2- x;
                        const deltaY = centerY/6 - y;
                        event.target.style.transform = `perspective(1000px) rotateX(${deltaY /
                          5}deg) rotateY(${deltaX /195}deg) translateZ(20px)`;
                      }} className="movie_desc flex flex-col justify-between h-fit">
                        <p className="text line-clamp-4 text-justify text-lg font-extralight">
                            {description && description.replace(/<[^>]+>/g, "")}hello htis is my project of web development hello htis is my project of web developmenthello htis is my project of web developmenthello htis is my project of web developmenthello htis is my project of web developmenthello htis is my project of web development
                        </p>
                    
                    </div>
                    <div  onMouseMove={(event) => {
                const x = event.nativeEvent.offsetX;
                const y = event.nativeEvent.offsetY;
                const centerX = event.target.clientWidth / 2;
                const centerY = event.target.clientHeight / 2;
                const deltaX = centerX /2- x;
                const deltaY = centerY/6 - y;
                event.target.style.transform = `perspective(1000px) rotateX(${deltaY /
                  5}deg) rotateY(${deltaX /195}deg) translateZ(20px)`;
              }}
              className="mb-4 ml-7"> {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="text-sm bg-zinc-600 text-white 
                                rounded-full py-1 px-2 mr-2 mb-2">
                            {tech}
                        </span>
                    ))}</div>
                    {/* <p className="text-white ml-5 mb-10 text-lg"><span className="text-blue-300">Language :</span> {movie.language}</p> */}

                </div>
                {image ? (
                    <div
                        className="blur_back bg-contain"
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                ) : (
                    <div
                        className="blur_back "
                        style={{ backgroundImage: `url(${notA})` }}
                    ></div>
                )}
                <button className="bg-gray-900 hover:bg-gray-400 text-gray-50 font-bold py-2 px-4 rounded inline-flex items-center absolute bottom-0 right-0 mb-5 mr-5 cursor-pointer border z-[999]"
                    onClick={() => { navigate({url}) }}
                    onMouseMove={(event) => {
                        const x = event.nativeEvent.offsetX;
                        const y = event.nativeEvent.offsetY;
                        const centerX = event.target.clientWidth / 2;
                        const centerY = event.target.clientHeight / 2;
                        const deltaX = centerX /2- x;
                        const deltaY = centerY/6 - y;
                        event.target.style.transform = `perspective(1000px) rotateX(${deltaY /
                          5}deg) rotateY(${deltaX /5}deg) translateZ(20px)`;
                      }}
                >
                    Know more
                </button>
            </div>

        </div>
    );
}
