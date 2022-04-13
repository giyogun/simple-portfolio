import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import NavBar from "./components/NavBar";
import Project from "./components/Project";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<About />} path="/about"></Route>
        <Route element={<SinglePost />} path="/post:slug"></Route>
        <Route element={<Post />} path="/post"></Route>
        <Route element={<Project />} path="/project"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
