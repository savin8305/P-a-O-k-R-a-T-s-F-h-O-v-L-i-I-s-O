// import React from "react";
// import { motion } from "framer-motion";
// import ResumeCard from "../resume/ResumeCard";
// import { useInView } from "react-intersection-observer";
// import logo from "../../assets/logo.jpg"
// const About = () => {
//   const [ref1, inView1] = useInView({ threshold: 0.3 });
//   const [ref2, inView2] = useInView({ threshold: 0.3 });

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="py-12 font-titleFont grid grid-cols-1 md:grid-cols-2 gap-10"
//     >
//       <div>
//         <div className="flex flex-col px-9 gap-4">
//           <p className="text-sm px-10 text text-designColor tracking-[4px]"></p>
//           <h2 className="text-4xl px-10 font-bold">ⒶⒷⓄⓊⓉ ⓂⒺ</h2>
//         </div>
//         <div
//           ref={ref1}
//           className="mt-14 rounded-tl-3xl rounded-bl-3xl h-half border-l-[2px] border-l-black border-opacity-60 overflow-y-auto"
//         >
//           <img
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
//           <motion.div
//             initial={{ x: "-100vw", opacity: 0 }}
//             animate={
//               inView1
//                 ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.4 } }
//                 : { x: "-100vw", opacity: 0 }
//             }
//           >
//             <div className="p-4">
//             <ResumeCard
//                   title="Lorem ipsum dolor sit amet."
//                   subTitle="Lorem ipsum dolor sit amet alternative."
//                   result="Success"
//                   des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporisdolor debitis natus sapiente, voluptates possimus minima totam!"
//                   className="max-w-xs md:max-w-md"
//                 />
//             </div>
//           </motion.div>
//           <motion.div
//             initial={{ x: "-100vw", opacity: 0 }}
//             animate={
//               inView1
//                 ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.6 } }
//                 : { x: "-100vw", opacity: 0 }
//             }
//           >
//             <div className="p-4">
//             <ResumeCard
//                   title="Lorem ipsum dolor sit amet."
//                   subTitle="Lorem ipsum dolor sit amet alternative."
//                   result="Success"
//                   des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
//                   className="max-w-xs md:max-w-md"
//                 />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//       <div>
//         <div className="flex px-10 flex-col gap-4">
//           <p className="text-sm px-9 text-designColor tracking-[4px]">2018-2024</p>
//           <h2 className="text-4xl px-9 font-bold">Personal Projects</h2>
//         </div>
//         <div
//           ref={ref2}
//           className="mt-14 rounded-tl-3xl rounded-bl-3xl h-half border-l-[2px] border-l-black border-opacity-60 overflow-y-auto"
//         >
//           <motion.div
//             initial={{ x: "100vw", opacity: 0 }}
//             animate={
//               inView2
//                 ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
//                 : { x:"100vw", opacity: 0 }
//                 }
//                 >
//                 <div className="p-4">
//                 <ResumeCard
//           title="Lorem ipsum dolor sit amet."
//           subTitle="Lorem ipsum dolor sit amet alternative."
//           result="Success"
//           des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaqueaccusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
//           className="max-w-xs md:max-w-md"
//           />
//                 </div>
//                 </motion.div>
//                 <motion.div
//                 initial={{ x: "100vw", opacity: 0 }}
//                 animate={
//                 inView2
//                 ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.4 } }
//                 : { x: "100vw", opacity: 0 }
//                 }
//                 >
//                 <div className="p-4">
//                 <ResumeCard
//                         title="Lorem ipsum dolor sit amet."
//                         subTitle="Lorem ipsum dolor sit amet alternative."
//                         result="Success"
//                         des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
//                         className="max-w-xs md:max-w-md"
//                       />
//                 </div>
//                 </motion.div>
//                 <motion.div
//                 initial={{ x: "100vw", opacity: 0 }}
//                 animate={
//                 inView2
//                 ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.6 } }
//                 : { x: "100vw", opacity: 0 }
//                 }
//                 >
//                 <div className="p-4">
//                 <ResumeCard
//                         title="Lorem ipsum dolor sit amet."
//                         subTitle="Lorem ipsum dolor sit amet alternative."
//                         result="Success"
//                         des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
//                         className="max-w-xs md:max-w-md"
//                       />
//                 </div>
//                 </motion.div>
//                 </div>
//                 </div>
//                 </motion.div>
//     );
//   };
// export default About;
                
import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "../resume/ResumeCard";
import { useInView } from "react-intersection-observer";
import logo from "../../assets/logo.jpg"
const About = () => {
  const [ref1, inView1] = useInView({ threshold: 0.3 });
  const [ref2, inView2] = useInView({ threshold: 0.3 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont grid grid-cols-1 md:grid-cols-2 gap-10"
    >
      <div>
        <div className="flex flex-col px-9 gap-4">
          <p className="text-sm px-10 text text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl px-10 font-bold">ⒶⒷⓄⓊⓉ ⓂⒺ</h2>
        </div>
        <div
          ref={ref1}
          className="mt-14 rounded-tl-3xl rounded-bl-3xl h-half border-l-[2px] border-l-black border-opacity-60 overflow-y-auto"
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
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={
              inView1
                ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.4 } }
                : { x: "-100vw", opacity: 0 }
            }
          >
            <div className="p-4">
            <ResumeCard
                  title="Lorem ipsum dolor sit amet."
                  subTitle="Lorem ipsum dolor sit amet alternative."
                  result="Success"
                  des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporisdolor debitis natus sapiente, voluptates possimus minima totam!"
                  className="max-w-xs md:max-w-md"
                />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={
              inView1
                ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.6 } }
                : { x: "-100vw", opacity: 0 }
            }
          >
            <div className="p-4">
            <ResumeCard
                  title="Lorem ipsum dolor sit amet."
                  subTitle="Lorem ipsum dolor sit amet alternative."
                  result="Success"
                  des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
                  className="max-w-xs md:max-w-md"
                />
            </div>
          </motion.div>
        </div>
      </div>
      <div>
        <div className="flex px-10 flex-col gap-4">
          <p className="text-sm px-9 text-designColor tracking-[4px]">2018-2024</p>
          <h2 className="text-4xl px-9 font-bold">Personal Projects</h2>
        </div>
        <div
          ref={ref2}
          className="mt-14 rounded-tl-3xl rounded-bl-3xl h-half border-l-[2px] border-l-black border-opacity-60 overflow-y-auto"
        >
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={
              inView2
                ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
                : { x:"100vw", opacity: 0 }
                }
                >
                <div className="p-4">
                <ResumeCard
          title="Lorem ipsum dolor sit amet."
          subTitle="Lorem ipsum dolor sit amet alternative."
          result="Success"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaqueaccusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          className="max-w-xs md:max-w-md"
          />
                </div>
                </motion.div>
                <motion.div
                initial={{ x: "100vw", opacity: 0 }}
                animate={
                inView2
                ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.4 } }
                : { x: "100vw", opacity: 0 }
                }
                >
                <div className="p-4">
                <ResumeCard
                        title="Lorem ipsum dolor sit amet."
                        subTitle="Lorem ipsum dolor sit amet alternative."
                        result="Success"
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
                        className="max-w-xs md:max-w-md"
                      />
                </div>
                </motion.div>
                <motion.div
                initial={{ x: "100vw", opacity: 0 }}
                animate={
                inView2
                ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.6 } }
                : { x: "100vw", opacity: 0 }
                }
                >
                <div className="p-4">
                <ResumeCard
                        title="Lorem ipsum dolor sit amet."
                        subTitle="Lorem ipsum dolor sit amet alternative."
                        result="Success"
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
                        className="max-w-xs md:max-w-md"
                      />
                </div>
                </motion.div>
                </div>
                </div>
                </motion.div>
    );
  };
export default About;
                
                