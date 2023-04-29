// import React from "react";
// import { motion } from "framer-motion";

// const TimeLine = ({ timelines = [] }) => {
// return (
// <div  style={{display:"flex",flexDirection:"row"}}>
// {timelines.map((item, index) => (
// <motion.div
// className="h-half border-l-[6px] rounded-tl-3xl h-96 rounded-full hover:transform hover:perspective(1000) hover:rotateX(-10deg) hover:rotateY(-10deg) hover:translateZ(20px)"
// key={index}
// initial={{ opacity: 0, translateZ: -200 }}
// animate={{ opacity: 1, translateZ: 0 }}
// transition={{ duration: 0.5 }}
// style={{
// display: "flex",
// flexDirection: "row",
// alignItems: "center",
// width: "100%",
// maxWidth: "800px",
// margin: "16px auto",
// borderRadius: "12px",
// backgroundColor: "rgba(255, 255, 255, 0.9)",
// boxShadow:
// "4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.5)",
// transformStyle: "preserve-3d",
// perspective: "1000px",
// willChange: "transform",
// }}
// whileHover={{ scale: 1.05 }}
// whileTap={{ scale: 0.95 }}
// >
// <div
// style={{
// height: "40px",
// width: "40px",
// borderRadius: "50%",
// backgroundColor: "#ffffff",
// display: "flex",
// justifyContent: "center",
// alignItems: "center",
// margin: "16px",
// boxShadow:
// "4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.5)",
// transform: "translateZ(20px)",
// }}
// >
// <span
// style={{
// fontSize: "24px",
// color: "#000000",
// fontWeight: "bold",
// }}
// >
// •
// </span>
// </div>

//       <motion.div
//         style={{
//           display: "flex",
//           flexDirection: "row",
       
//           margin: "16px",
//           padding: "16px",
//           flex: 1,
//           borderRadius: "12px",
//           backgroundColor: "rgba(255, 255, 255, 0.9)",
//           boxShadow:
//             "4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.5)",
//           transform: "translateZ(30px)",
//           willChange: "transform",
//         }}
//       >
//         <h3 style={{ marginBottom: "8px" }}>{item.title}</h3>
//         <p>{item.description}</p>
//         <small style={{ marginTop: "8px" }}>
//           {item.date.toString().split("T")[0]}
//         </small>
//       </motion.div>

//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           borderRadius: "12px",
//           backgroundColor: "rgba(0, 0, 0, 0.1)",
//           transformStyle: "preserve-3d",
//           backfaceVisibility: "hidden",
//           zIndex: -1,
//         }}
//       ></div>
//     </motion.div>
//   ))}
// </div>
// );
// };

// export default TimeLine;
import React from "react";
import { motion } from "framer-motion";

const TimeLine = ({ timelines = [] }) => {
return (
<div  style={{display:"flex",flexDirection:"row"}}>
{timelines.map((item, index) => (
<motion.div
className="h-half border-l-[6px] rounded-tl-3xl h-96 rounded-full hover:transform hover:perspective(1000) hover:rotateX(-10deg) hover:rotateY(-10deg) hover:translateZ(20px)"
key={index}
initial={{ opacity: 0, translateZ: -200 }}
animate={{ opacity: 1, translateZ: 0 }}
transition={{ duration: 0.5 }}
style={{
display: "flex",
flexDirection: "row",
alignItems: "center",
width: "100%",
maxWidth: "800px",
margin: "16px auto",
borderRadius: "12px",
backgroundColor: "rgba(255, 255, 255, 0.9)",
boxShadow:
"4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.5)",
transformStyle: "preserve-3d",
perspective: "1000px",
willChange: "transform",
}}
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
>
<div
style={{
height: "40px",
width: "40px",
borderRadius: "50%",
backgroundColor: "#ffffff",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin: "16px",
boxShadow:
"4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.5)",
transform: "translateZ(20px)",
}}
>
<span
style={{
fontSize: "24px",
color: "#000000",
fontWeight: "bold",
}}
>
•
</span>
</div>

      <motion.div
        style={{
          display: "flex",
          flexDirection: "row",
       
          margin: "16px",
          padding: "16px",
          flex: 1,
          borderRadius: "12px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow:
            "4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.5)",
          transform: "translateZ(30px)",
          willChange: "transform",
        }}
      >
        <h3 style={{ marginBottom: "8px" }}>titile</h3>
        <p>item ka dexription</p>
        <small style={{ marginTop: "8px" }}>
         date backend se ayega
        </small>
      </motion.div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "12px",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          zIndex: -1,
        }}
      ></div>
    </motion.div>
  ))}
</div>
);
};

export default TimeLine;