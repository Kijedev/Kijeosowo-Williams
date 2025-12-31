import { Routes, Route } from "react-router";
import "./App.css";
// components
import NavbarMenu from "./components/NavbarMenu";
import Homepage from "./components/Homepage";
import ScrollToTop from "./components/ScrollToTop";
// pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Certification from "./pages/Certification";
import CustomCursor from "./components/ui/CustomCursor";
import TimelineDemo from "./components/ui/TimelineDemo";

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<TimelineDemo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certification" element={<Certification />} />
      </Routes>
    </>
  );
}

export default App;
