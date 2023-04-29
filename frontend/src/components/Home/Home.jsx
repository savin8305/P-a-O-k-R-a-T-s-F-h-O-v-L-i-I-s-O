// import React ,{ useState } from "react";
// import { motion } from "framer-motion";
// import ResumeCard from "../resume/ResumeCard";
// import { TimeLine} from "../index";
// import { useInView } from "react-intersection-observer";
// import logo from "../../assets/logo2.jpg";
// import YoutubeCard from "../YoutubeCard/YoutubeCard";
// import "./Home.css";
// const Home = ({ timelines, youtubes, skills }) => {
//   const [ref2, inView2] = useInView({ threshold: 0.2 });
//   const [selectedSlide, setSelectedSlide] = useState('slide-1');
//   const handleSlideChange = (event) => {
//     setSelectedSlide(event.target.id);
//   };
//   return (
//     <div className="home">
//       <motion.div  
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1, transition: { duration: 0.5 } }}
//         className=" py-12 font-titleFont grid grid-cols-1 md:grid-cols-2 gap-10 overflow-y-auto-hidden "
//       >
//         <div>
//           <div className="flex flex-col px-9 gap-4"></div>
//           <div>
//             <div
//               className="mt-14 ml-3 rounded-tl-3xl rounded-bl-3xl h-half border-l-[2px] border-l-black border-opacity-60 overflow-y-auto"
//             >
//               <img
//                 className="h-half border-l-[6px] rounded-tl-3xl h-96 rounded-full hover:transform hover:perspective(1000) hover:rotateX(-10deg) hover:rotateY(-10deg) hover:translateZ(20px)"
//                 src={logo}
//                 alt=""
//                 onMouseMove={(event) => {
//                   const x = event.nativeEvent.offsetX;
//                   const y = event.nativeEvent.offsetY;
//                   const centerX = event.target.clientWidth / 2;
//                   const centerY = event.target.clientHeight / 2;
//                   const deltaX = centerX - x;
//                   const deltaY = centerY - y;
//                   event.target.style.transform = `perspective(1000px) rotateX(${deltaY /
//                     5}deg) rotateY(${deltaX / 5}deg) translateZ(20px)`;
//                 }}
//               />
//               <div className="mt-14 rounded-tl-3xl rounded-bl-3xl h-half border-l-[2px] border-l-black border-opacity-60 overflow-y-auto"></div>
//               <span className="ml-69 border-l-black mt-28 rounded-tl-3xl rounded-full ml-20  inline-block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 pointer-events-none"></span>
//             </div>

//             <div className="p-24"></div>
//             <div className="p-4"></div>
//           </div>
//         </div>
//         <div>
//           <div className="flex px-10 flex-col gap-4">
//             <p className="text-sm px-9 tracking-[4px]"></p>
//             <h2 className="text-4xl px-2 font-bold">𝔸𝕂𝔸𝕊ℍ 𝕍𝕀𝕊ℍ𝕎𝔸𝕂𝔸ℝ𝕄𝔸</h2>
//           </div>
//           <div  ref={ref2} className="mt-14 rounded-tl-3xl rounded-bl-3xl h-half border-l-[2px] border-l-black border-opacity-60 overflow-y-auto">
//             <motion.div
            
//               initial={{ x: "100vw", opacity: 0 }}
//               animate={
//                 inView2 ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } } : { x: "100vw", opacity: 0 }
//               }
//             >
//               <div className="p-4">
//                 <ResumeCard
//                   title="Lorem ipsum dolor sit amet."
//                   subTitle="Lorem ipsum dolor sit amet alternative."
//                   result="RESUME"
//                   des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaqueaccusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
//                   className="max-w-xs md:max-w-md"
//                 />
//               </div>
//             </motion.div>
//             <motion.div
//               initial={{ x: "100vw", opacity: 0 }}
//               animate={
//                 inView2 ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.4 } } : { x: "100vw", opacity: 0 }
//               }
//             >
//               <div className="p-4">
//                 <ResumeCard
//                   title="Lorem ipsum dolor sit amet."
//                   subTitle="Lorem ipsum dolor sit amet alternative."
//                   result="CONTACT"
//                   des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporisdolor debitis natus sapiente, voluptates possimus minima totam!"
//                   className="max-w-xs md:max-w-md"
//                   />
//                   </div>
//                   </motion.div>
//                   </div>
//                   </div>
                 
//                   </motion.div>
                  
//                   <div>
//                       <p variant="h3">TIMELINE</p>
//                       <TimeLine timelines={[1,2,3,4]} />
//                     </div>
//   <div className="section full-height over-hide px-4 px-sm-0">
//         <div className="h-half border-l-[6px] rounded-tl-3xl h-96 rounded-full hover:transform hover:perspective(1000) hover:rotateX(-10deg) hover:rotateY(-10deg) hover:translateZ(20px)"
//                >
//           <div className="row full-height justify-content-center">
//             <div className="col-lg-10 col-xl-8 align-self-center padding-tb">
//               <div className="section mx-auto text-center slider-height-padding">
//                 <input className="checkbox frst " type="radio" id="slide-1" name="slider" checked={selectedSlide === 'slide-1'} onChange={handleSlideChange} />
//                 <label style={{backgroundImage: `url(${logo})`}}
//  htmlFor="slide-1"></label>
//                 <input className="checkbox scnd" type="radio" id="slider-2" name="slider" checked={selectedSlide === 'slider-2'} onChange={handleSlideChange} />
//                 <label style={{backgroundImage: `url(${logo})`}}
//  htmlFor="slider-2"></label>
//                 <input  className="checkbox thrd" type="radio" id="slider-3" name="slider" checked={selectedSlide === 'slider-3'} onChange={handleSlideChange} />
//                 <label style={{backgroundImage: `url(${logo})`}}
//  htmlFor="slider-3"></label>
//                 <input className="checkbox foth" type="radio" id="slider-4" name="slider" checked={selectedSlide === 'slider-4'} onChange={handleSlideChange} />
//                 <label style={{backgroundImage: `url(${logo})`}}
//  htmlFor="slider-4"></label>
//                 <input className="checkbox fifth" type="radio" id="slider-5" name="slider" checked={selectedSlide === 'slider-5'} onChange={handleSlideChange} />
//                 <label style={{backgroundImage: `url(${logo})`}}
//  htmlFor="slider-5"></label>
//                 <input className="checkbox sixth" type="radio" id="slider-6" name="slider" checked={selectedSlide === 'slider-6'} onChange={handleSlideChange} />
//                 <label style={{backgroundImage: `url(${logo})`}}
//  htmlFor="slider-6"></label>
//                 <ul>
//                   <li className="h-half border-l-[6px] rounded-tl-3xl h-96 rounded-full hover:transform hover:perspective(1000) hover:rotateX(-10deg) hover:rotateY(-10deg) hover:translateZ(20px)"
//                 style={{backgroundImage: `url(${logo})`}}
// >
//                     <span>MALE GOOFY FACE</span>
//                   </li>
//                   <li className="h-half border-l-[6px] rounded-tl-3xl h-96 rounded-full hover:transform hover:perspective(1000) hover:rotateX(-10deg) hover:rotateY(-10deg) hover:translateZ(20px)"
//                 style={{backgroundImage: `url(${logo})`}}
// >
//                     <span>TOY PIG</span>
//                   </li>
//                   <li className="h-half border-l-[6px] rounded-tl-3xl h-96 rounded-full hover:transform hover:perspective(1000) hover:rotateX(-10deg) hover:rotateY(-10deg) hover:translateZ(20px)"
//                 style={{backgroundImage: `url(${logo})`}}
// >
//                     <span>SHY PORTRAIT</span>
//                   </li>
//                   <li className="h-half border-l-[6px] rounded-tl-3xl h-96 rounded-full hover:transform hover:perspective(1000) hover:rotateX(-10deg) hover:rotateY(-10deg) hover:translateZ(20px)"
//                 style={{backgroundImage: `url(${logo})`}}
// >
//                     <span>SKATEBOARD FACE</span>
//                   </li>
//                   <li className="h-half border-l-[6px] rounded-tl-3xl h-96 rounded-full hover:transform hover:perspective(1000) hover:rotateX(-10deg) hover:rotateY(-10deg) hover:translateZ(20px)"
//                 style={{backgroundImage: `url(${logo})`}}
// >
//                     <span>SKATEBOARD FACE</span>
//                   </li>
//                   <li className="h-half border-l-[6px] rounded-tl-3xl h-96 rounded-full hover:transform hover:perspective(1000) hover:rotateX(-10deg) hover:rotateY(-10deg) hover:translateZ(20px)"
//                 style={{backgroundImage: `url(${logo})`}}
// >
//                     <span>SKATEBOARD FACE</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="homeYoutube">
//         <p variant="h3"> YOUTUBE VIDEOS</p>

        
//       </div>
// </div>
// );
// };
                 
//  export default Home;
import React ,{ useState } from "react";
import { motion } from "framer-motion";
import ResumeCard from "../resume/ResumeCard";
import { TimeLine} from "../index";
import { useInView } from "react-intersection-observer";
import logo from "../../assets/logo.jpg";
import YoutubeCard from "../YoutubeCard/YoutubeCard";
import "./Home.css";
const Home = () => {
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [selectedSlide, setSelectedSlide] = useState('slide-1');
  const handleSlideChange = (event) => {
    setSelectedSlide(event.target.id);
  };
  return (
    <div className="home">
      <motion.div  
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className=" py-12 font-titleFont grid grid-cols-1 md:grid-cols-2 gap-10 overflow-y-auto-hidden "
      >
        <div>
          <div className="flex flex-col px-9 gap-4"></div>
          <div>
            <div
              className="mt-14 ml-3 rounded-tl-3xl rounded-bl-3xl h-half border-l-[2px] border-l-black border-opacity-60 overflow-y-auto"
            >
              <img
                className="h-half border-l-[6px] rounded-tl-3xl h-96 rounded-full hover:transform hover:perspective(1000) hover:rotateX(-10deg) hover:rotateY(-10deg) hover:translateZ(20px)"
                src={logo}
                alt=""
                onMouseMove={(event) => {
                  const x = event.nativeEvent.offsetX;
                  const y = event.nativeEvent.offsetY;
                  const centerX = event.target.clientWidth / 2;
                  const centerY = event.target.clientHeight / 2;
                  const deltaX = centerX - x;
                  const deltaY = centerY - y;
                  event.target.style.transform = `perspective(1000px) rotateX(${deltaY /
                    5}deg) rotateY(${deltaX / 5}deg) translateZ(20px)`;
                }}
              />
              <div className="mt-14 rounded-tl-3xl rounded-bl-3xl h-half border-l-[2px] border-l-black border-opacity-60 overflow-y-auto"></div>
              <span className="ml-69 border-l-black mt-28 rounded-tl-3xl rounded-full ml-20  inline-block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 pointer-events-none"></span>
            </div>

            <div className="p-24"></div>
            <div className="p-4"></div>
          </div>
        </div>
        <div>
          <div className="flex px-10 flex-col gap-4">
            <p className="text-sm px-9 tracking-[4px]"></p>
            <h2 className="text-4xl px-2 font-bold">𝔸𝕂𝔸𝕊ℍ 𝕍𝕀𝕊ℍ𝕎𝔸𝕂𝔸ℝ𝕄𝔸</h2>
          </div>
          <div  ref={ref2} className="mt-14 rounded-tl-3xl rounded-bl-3xl h-half border-l-[2px] border-l-black border-opacity-60 overflow-y-auto">
            <motion.div
            
              initial={{ x: "100vw", opacity: 0 }}
              animate={
                inView2 ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } } : { x: "100vw", opacity: 0 }
              }
            >
              <div className="p-4">
                <ResumeCard
                  title="Lorem ipsum dolor sit amet."
                  subTitle="Lorem ipsum dolor sit amet alternative."
                  result="RESUME"
                  des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaqueaccusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
                  className="max-w-xs md:max-w-md"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: "100vw", opacity: 0 }}
              animate={
                inView2 ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.4 } } : { x: "100vw", opacity: 0 }
              }
            >
              <div className="p-4">
                <ResumeCard
                  title="Lorem ipsum dolor sit amet."
                  subTitle="Lorem ipsum dolor sit amet alternative."
                  result="CONTACT"
                  des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporisdolor debitis natus sapiente, voluptates possimus minima totam!"
                  className="max-w-xs md:max-w-md"
                  />
                  </div>
                  </motion.div>
                  </div>
                  </div>
                 
                  </motion.div>
                  
                  <div>
                      <p variant="h3">TIMELINE</p>
                      <TimeLine timelines={[1,2,3,4]} />
                    </div>
  <div className="section full-height over-hide px-4 px-sm-0">
        <div className="h-half border-l-[6px] rounded-tl-3xl h-96 rounded-full hover:transform hover:perspective(1000) hover:rotateX(-10deg) hover:rotateY(-10deg) hover:translateZ(20px)"
               >
          <div className="row full-height justify-content-center">
            <div className="col-lg-10 col-xl-8 align-self-center padding-tb">
              <div className="section mx-auto text-center slider-height-padding">
                <input className="checkbox frst " type="radio" id="slide-1" name="slider" checked={selectedSlide === 'slide-1'} onChange={handleSlideChange} />
                <label style={{backgroundImage: `url(${logo})`}}
 htmlFor="slide-1"></label>
                <input className="checkbox scnd" type="radio" id="slider-2" name="slider" checked={selectedSlide === 'slider-2'} onChange={handleSlideChange} />
                <label style={{backgroundImage: `url(${logo})`}}
 htmlFor="slider-2"></label>
                <input  className="checkbox thrd" type="radio" id="slider-3" name="slider" checked={selectedSlide === 'slider-3'} onChange={handleSlideChange} />
                <label style={{backgroundImage: `url(${logo})`}}
 htmlFor="slider-3"></label>
                <input className="checkbox foth" type="radio" id="slider-4" name="slider" checked={selectedSlide === 'slider-4'} onChange={handleSlideChange} />
                <label style={{backgroundImage: `url(${logo})`}}
 htmlFor="slider-4"></label>
                <input className="checkbox fifth" type="radio" id="slider-5" name="slider" checked={selectedSlide === 'slider-5'} onChange={handleSlideChange} />
                <label style={{backgroundImage: `url(${logo})`}}
 htmlFor="slider-5"></label>
                <input className="checkbox sixth" type="radio" id="slider-6" name="slider" checked={selectedSlide === 'slider-6'} onChange={handleSlideChange} />
                <label style={{backgroundImage: `url(${logo})`}}
 htmlFor="slider-6"></label>
                <ul>
                  <li className="h-half border-l-[6px] rounded-tl-3xl h-96 rounded-full hover:transform hover:perspective(1000) hover:rotateX(-10deg) hover:rotateY(-10deg) hover:translateZ(20px)"
                style={{backgroundImage: `url(${logo})`}}
>
                    <span>MALE GOOFY FACE</span>
                  </li>
                  <li className="h-half border-l-[6px] rounded-tl-3xl h-96 rounded-full hover:transform hover:perspective(1000) hover:rotateX(-10deg) hover:rotateY(-10deg) hover:translateZ(20px)"
                style={{backgroundImage: `url(${logo})`}}
>
                    <span>TOY PIG</span>
                  </li>
                  <li className="h-half border-l-[6px] rounded-tl-3xl h-96 rounded-full hover:transform hover:perspective(1000) hover:rotateX(-10deg) hover:rotateY(-10deg) hover:translateZ(20px)"
                style={{backgroundImage: `url(${logo})`}}
>
                    <span>SHY PORTRAIT</span>
                  </li>
                  <li className="h-half border-l-[6px] rounded-tl-3xl h-96 rounded-full hover:transform hover:perspective(1000) hover:rotateX(-10deg) hover:rotateY(-10deg) hover:translateZ(20px)"
                style={{backgroundImage: `url(${logo})`}}
>
                    <span>SKATEBOARD FACE</span>
                  </li>
                  <li className="h-half border-l-[6px] rounded-tl-3xl h-96 rounded-full hover:transform hover:perspective(1000) hover:rotateX(-10deg) hover:rotateY(-10deg) hover:translateZ(20px)"
                style={{backgroundImage: `url(${logo})`}}
>
                    <span>SKATEBOARD FACE</span>
                  </li>
                  <li className="h-half border-l-[6px] rounded-tl-3xl h-96 rounded-full hover:transform hover:perspective(1000) hover:rotateX(-10deg) hover:rotateY(-10deg) hover:translateZ(20px)"
                style={{backgroundImage: `url(${logo})`}}
>
                    <span>SKATEBOARD FACE</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homeYoutube">
        <p variant="h3"> YOUTUBE VIDEOS</p>
      </div>
</div>
);
};
                 
 export default Home;