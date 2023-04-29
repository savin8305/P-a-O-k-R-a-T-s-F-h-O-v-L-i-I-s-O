

import { Home,Header,About,Projects} from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./components/Login/Login";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getUser, loadUser } from "./actions/user";
// import AdminPanel from "./components/Admin/AdminPanel";
// import Timeline from "./components/Admin/Timeline";
// import Youtube from "./components/Admin/Youtube";
// import Project from "./components/Admin/Project";
// import Loader from "./components/Loader/Loader";

function App() {
  // const dispatch = useDispatch();

  // const { isAuthenticated } = useSelector((state) => state.login);
  // const { loading, user } = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(getUser());
  //   dispatch(loadUser());
  // }, [dispatch]);
  const projects = [
    {
      title: "Project One",
      subTitle: "Sub Title One",
      description: "Description for Project One",
      technologies: ["Tech One", "Tech Two", "Tech Three"],
      url: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4FvfdxemL57Z6wGh9Vj6SlvlD8zVVC8zg&usqp=CAU",
    },
    {
      title: "Project One",
      subTitle: "Sub Title One",
      description: "Description for Project One",
      technologies: ["Tech One", "Tech Two", "Tech Three"],
      url: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4FvfdxemL57Z6wGh9Vj6SlvlD8zVVC8zg&usqp=CAU",
    },
    {
      title: "Project One",
      subTitle: "Sub Title One",
      description: "Description for Project One",
      technologies: ["Tech One", "Tech Two", "Tech Three"],
      url: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4FvfdxemL57Z6wGh9Vj6SlvlD8zVVC8zg&usqp=CAU",
    },
    {
      title: "Project One",
      subTitle: "Sub Title One",
      description: "Description for Project One",
      technologies: ["Tech One", "Tech Two", "Tech Three"],
      url: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4FvfdxemL57Z6wGh9Vj6SlvlD8zVVC8zg&usqp=CAU",
    },
    {
      title: "Project One",
      subTitle: "Sub Title One",
      description: "Description for Project One",
      technologies: ["Tech One", "Tech Two", "Tech Three"],
      url: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4FvfdxemL57Z6wGh9Vj6SlvlD8zVVC8zg&usqp=CAU",
    },
    {
      title: "Project One",
      subTitle: "Sub Title One",
      description: "Description for Project One",
      technologies: ["Tech One", "Tech Two", "Tech Three"],
      url: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4FvfdxemL57Z6wGh9Vj6SlvlD8zVVC8zg&usqp=CAU",
    },
    {
      title: "Project One",
      subTitle: "Sub Title One",
      description: "Description for Project One",
      technologies: ["Tech One", "Tech Two", "Tech Three"],
      url: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4FvfdxemL57Z6wGh9Vj6SlvlD8zVVC8zg&usqp=CAU",
    },
    {
      title: "Project One",
      subTitle: "Sub Title One",
      description: "Description for Project One",
      technologies: ["Tech One", "Tech Two", "Tech Three"],
      url: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4FvfdxemL57Z6wGh9Vj6SlvlD8zVVC8zg&usqp=CAU",
    },
    {
      title: "Project One",
      subTitle: "Sub Title One",
      description: "Description for Project One",
      technologies: ["Tech One", "Tech Two", "Tech Three"],
      url: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4FvfdxemL57Z6wGh9Vj6SlvlD8zVVC8zg&usqp=CAU",
    },
    {
      title: "Project One",
      subTitle: "Sub Title One",
      description: "Description for Project One",
      technologies: ["Tech One", "Tech Two", "Tech Three"],
      url: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4FvfdxemL57Z6wGh9Vj6SlvlD8zVVC8zg&usqp=CAU",
    },
    {
      title: "Project One",
      subTitle: "Sub Title One",
      description: "Description for Project One",
      technologies: ["Tech One", "Tech Two", "Tech Three"],
      url: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4FvfdxemL57Z6wGh9Vj6SlvlD8zVVC8zg&usqp=CAU",
    },
    {
      title: "Project One",
      subTitle: "Sub Title One",
      description: "Description for Project One",
      technologies: ["Tech One", "Tech Two", "Tech Three"],
      url: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4FvfdxemL57Z6wGh9Vj6SlvlD8zVVC8zg&usqp=CAU",
    },
    {
      title: "Project One",
      subTitle: "Sub Title One",
      description: "Description for Project One",
      technologies: ["Tech One", "Tech Two", "Tech Three"],
      url: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4FvfdxemL57Z6wGh9Vj6SlvlD8zVVC8zg&usqp=CAU",
    },
    {
      title: "Project One",
      subTitle: "Sub Title One",
      description: "Description for Project One",
      technologies: ["Tech One", "Tech Two", "Tech Three"],
      url: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4FvfdxemL57Z6wGh9Vj6SlvlD8zVVC8zg&usqp=CAU",
    },
    {
      title: "Project One",
      subTitle: "Sub Title One",
      description: "Description for Project One",
      technologies: ["Tech One", "Tech Two", "Tech Three"],
      url: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4FvfdxemL57Z6wGh9Vj6SlvlD8zVVC8zg&usqp=CAU",
    },
    {
      title: "Project Two",
      subTitle: "Sub Title Two",
      description: "Description for Project Two",
      technologies: ["Tech Four", "Tech Five", "Tech Six"],
      url: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4FvfdxemL57Z6wGh9Vj6SlvlD8zVVC8zg&usqp=CAU",
    },
    {
      title: "Project Two",
      subTitle: "Sub Title Two",
      description: "Description for Project Two",
      technologies: ["Tech Four", "Tech Five", "Tech Six"],
      url: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4FvfdxemL57Z6wGh9Vj6SlvlD8zVVC8zg&usqp=CAU",
    },
    {
      title: "Project Two",
      subTitle: "Sub Title Two",
      description: "Description for Project Two",
      technologies: ["Tech Four", "Tech Five", "Tech Six"],
      url: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4FvfdxemL57Z6wGh9Vj6SlvlD8zVVC8zg&usqp=CAU",
    }
    // Add more projects here if needed
  ];
  return (
    <Router>
      {/* {loading ? (
      //   <Loader /> */}
      {/* // ) :
      //  ( */}
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  
                  // timelines={user.timeline}
                  // skills={user.skills}
                />
              }
            />
            <Route
              path="/projects"
              element={<Projects projects={projects} />} />
              <Route path="/about" element={<About />} />
            {/* <Route path="/about" element={<About />} />
            <Route
              path="/projects"
              element={<Projects projects={projects} />} */}
            {/* /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            />
            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            />
            <Route
              path="/admin/youtube"
              element={isAuthenticated ? <Youtube /> : <Login />}
            />

            <Route
              path="/admin/project"
              element={isAuthenticated ? <Project /> : <Login />}
            />
          </Routes>

          <Footer /> */}
           </Routes>
        </>
      {/* )} */}
    </Router>
  );
}

export default App;
