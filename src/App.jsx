import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blogpost from "./pages/Blogpost";
import Certification from "./pages/Certification";
import Fashion from "./pages/Fashion";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/blogpost" element={<Blogpost />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certification" element={<Certification />} />
        {/* <Route path="/fashion" element={< Fashion />} /> */}
      </Routes>
    </>
  );
}

export default App;
