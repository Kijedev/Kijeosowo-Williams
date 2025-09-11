import { Route, Routes } from "react-router";
import "./App.css";
// components
import NavbarMenu from "./components/NavbarMenu";
import Homepage from "./components/Homepage";
import Firstweek from "./components/Firstweek";
import Secondweek from "./components/Secondweek";
// pages
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blogpost from "./pages/Blogpost";
import Certification from "./pages/Certification";
import Articlespage from "./pages/Articlespage";
function App() {
  return (
    <>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blogpost" element={<Blogpost />} />
        <Route path="/articles" element={<Articlespage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/firstweek" element={<Firstweek />} />
        <Route path="/secondweek" element={<Secondweek />} />
      </Routes>
    </>
  );
}

export default App;
