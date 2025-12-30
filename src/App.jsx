import { Routes, Route } from "react-router";
import "./App.css";
// components
import NavbarMenu from "./components/NavbarMenu";
import Homepage from "./components/Homepage";
import Firstweek from "./components/Firstweek";
import Secondweek from "./components/Secondweek";
import Thirdweek from "./components/Thirdweek";
import Fourthweek from "./components/Fourthweek";
import Fifthweek from "./components/Fifthweek";
import Sixthweek from "./components/Sixthweek";
import ScrollToTop from "./components/ScrollToTop";
// pages
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blogpost from "./pages/Blogpost";
import Certification from "./pages/Certification";
import Articlespage from "./pages/Articlespage";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blogpost" element={<Blogpost />} />
        <Route path="/articles" element={<Articlespage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certification" element={<Certification />} />
        {/* Blog pages */}
        <Route path="/firstweek" element={<Firstweek />} />
        <Route path="/secondweek" element={<Secondweek />} />
        <Route path="/thirdweek" element={<Thirdweek />} />
        <Route path="/fourthweek" element={<Fourthweek />} />
        <Route path="/fifthweek" element={<Fifthweek />} />
        <Route path="/sixthweek" element={<Sixthweek />} />
      </Routes>
    </>
  );
}

export default App;
