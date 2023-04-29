import React from "react";
import { useInView } from "react-intersection-observer";
import logo from "../../assets/logo.jpg";
import Card from "../Cards/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = ({ projects }) => {


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items:1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };




  const [ref1, inView1] = useInView({ threshold: 0.3 });
  const [ref2, inView2] = useInView({ threshold: 0.3 });

  // Group projects into pairs
  let projectPairs = [];
  for (let i = 0; i < projects.length; i += 2) {
    projectPairs.push([projects[i], projects[i + 1]]);
  }
  if (projects.length % 2 !== 0) {
    projectPairs.push([projects[projects.length - 1]]);
  }
  return (
    <div className="w-full py-12 font-titleFont max-w-screen-lg mx-auto grid grid-cols-1
     gap-10 overflow-hidden">
      <div>
        <div className="flex flex-col px-4 md:px-9 gap-4">
          <p className="text-sm px-4 md:px-10 text-designColor tracking-[4px]"></p>
          <h2 style={{ marginBottom: "15vh" }} className="text-3xl px-4  md:px-10 font-bold">𝐌𝐘 𝐏𝐑𝐎𝐉𝐄𝐂𝐓𝐒</h2>
        </div>
        <div
          className="mt-14 min-h-fit flex md:flex-row flex-col  rounded-tl-3xl rounded-bl-3xl border-l-[2px] border-l-black border-opacity-60  "
          // style={{ height: "calc(100vh - 240px)", marginBottom: "15vh" }}
        > <div className="flex flex-col md:flex-row items-center md:space-x-8 space-x-4">
        <div>
          <img
            className="lg:text-lg xl:text-xl leading-relaxed animate-pulse border-l-[6px] rounded-tl-3xl lg:h-[90%] xl:h-[80%] h-[25%] rounded-full border-sm-black hover:transform hover:perspective(1000) hover:rotateX(-10deg) hover:rotateY(-10deg) hover:translateZ(20px)"
            src={logo}
            alt=""
            onMouseMove={(event) => {
              const x = event.nativeEvent.offsetX/25;
              const y = event.nativeEvent.offsetY/25;
              const centerX = event.target.clientWidth / 2;
              const centerY = event.target.clientHeight / 2;
              const deltaX = centerX /2- x;
              const deltaY = centerY/6 - y;
              event.target.style.transform = `perspective(1000px) rotateX(${deltaY /
                5}deg) rotateY(${deltaX /295}deg) translateZ(20px)`;
            }}
          />
        </div>
        
        <div className="md:w-[60%]  w-full mt-4 md:mt-0 border-l-[1px] rounded-tl-3xl md:h-60 h-auto rounded-full hover:transform hover:perspective(1000) hover:rotateX(-10deg) hover:rotateY(-10deg) hover:translateZ(20px) text-justify px-4 object-center">
          <h2 className="text-3xl mt-0 md:text-5xl font-bold text-center"
          >𝐇𝐢 𝐭𝐡𝐞𝐫𝐞! 𝐌𝐲 𝐧𝐚𝐦𝐞 𝐢𝐬 <br/>𝐀𝐊𝐀𝐒𝐇 𝐕𝐈𝐒𝐇𝐖𝐀𝐊𝐀𝐑𝐌𝐀</h2>
          <p className="text-lg md:text-xl leading-relaxed animate-pulse"
           onMouseMove={(event) => {
            const x = event.nativeEvent.offsetX;
            const y = event.nativeEvent.offsetY;
            const centerX = event.target.clientWidth / 12;
            const centerY = event.target.clientHeight / 2;
            const deltaX = centerX /2- x;
            const deltaY = centerY/6 - y;
            event.target.style.transform = `perspective(1000px) rotateX(${deltaY /
              5}deg) rotateY(${deltaX /195}deg) translateZ(20px)`;
          }}>
          𝘐’𝘮 𝘤𝘶𝘳𝘳𝘦𝘯𝘵𝘭𝘺 𝘢 𝘵𝘩𝘪𝘳𝘥-𝘺𝘦𝘢𝘳 𝘴𝘵𝘶𝘥𝘦𝘯𝘵 𝘱𝘶𝘳𝘴𝘶𝘪𝘯𝘨 𝘢 𝘣𝘢𝘤𝘩𝘦𝘭𝘰𝘳’𝘴 𝘥𝘦𝘨𝘳𝘦𝘦 𝘪𝘯 𝘤𝘰𝘮𝘱𝘶𝘵𝘦𝘳 𝘴𝘤𝘪𝘦𝘯𝘤𝘦 𝘢𝘯𝘥 𝘦𝘯𝘨𝘪𝘯𝘦𝘦𝘳𝘪𝘯𝘨 (𝘊𝘚𝘌). 𝘐 𝘭𝘪𝘷𝘦 𝘪𝘯 𝘎𝘶𝘯𝘢, 𝘸𝘩𝘦𝘳𝘦 𝘐 𝘸𝘢𝘴 𝘳𝘢𝘪𝘴𝘦𝘥 𝘣𝘺 𝘮𝘺 𝘧𝘢𝘵𝘩𝘦𝘳, 𝘸𝘩𝘰 𝘪𝘴 𝘢 𝘤𝘢𝘳𝘱𝘦𝘯𝘵𝘦𝘳, 𝘢𝘯𝘥 𝘮𝘺 𝘮𝘰𝘵𝘩𝘦𝘳, 𝘸𝘩𝘰 𝘪𝘴 𝘢 𝘩𝘰𝘮𝘦𝘮𝘢𝘬𝘦𝘳. 𝘎𝘳𝘰𝘸𝘪𝘯𝘨 𝘶𝘱 𝘪𝘯 𝘢 𝘧𝘢𝘮𝘪𝘭𝘺 𝘰𝘧 𝘮𝘢𝘬𝘦𝘳𝘴 𝘢𝘯𝘥 𝘤𝘳𝘦𝘢𝘵𝘰𝘳𝘴, 𝘐 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘥 𝘢 𝘥𝘦𝘦𝘱 𝘢𝘱𝘱𝘳𝘦𝘤𝘪𝘢𝘵𝘪𝘰𝘯 𝘧𝘰𝘳 𝘱𝘳𝘰𝘣𝘭𝘦𝘮-𝘴𝘰𝘭𝘷𝘪𝘯𝘨 𝘢𝘯𝘥 𝘪𝘯𝘯𝘰𝘷𝘢𝘵𝘪𝘰𝘯 𝘧𝘳𝘰𝘮 𝘢 𝘺𝘰𝘶𝘯𝘨 𝘢𝘨𝘦.</p>
        </div>
      </div>

      
      
      
      </div>
      
       
        <div
          ref={ref1}
          className="mt-14 min-h-screen max-w-screen overflow-hidden  rounded-tl-3xl rounded-bl-3xl border-l-[2px] border-l-black border-opacity-60 h-64 overflow-y-scroll "
          style={{ height: "calc(100vh - 240px)" }}
        >



          {projectPairs.map((pair, index) => (
            <div className="my-20 mx-10 " key={index}>
              <Card {...pair[0]} />
              {pair.length > 1 && <div style={{ marginTop: "80px" }}><Card {...pair[1]} /></div>}
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );

};

export default Projects;  

