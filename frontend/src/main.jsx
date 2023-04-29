// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css"
// import { Provider } from "react-redux";
// import store from "./Store";
// import { Provider as AlertProvider, positions, transitions } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";

// const options = {
//   position: positions.BOTTOM_CENTER,
//   timeout: 5000,
//   transition: transitions.SCALE,
// };

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <AlertProvider template={AlertTemplate} {...options}>
//         <App />
//       </AlertProvider>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
   
        <App />
   
  </React.StrictMode>,
  document.getElementById("root")
);

