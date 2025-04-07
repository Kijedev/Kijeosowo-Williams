import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blogpost from "./pages/Blogpost";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/blogpost" element={<Blogpost />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
