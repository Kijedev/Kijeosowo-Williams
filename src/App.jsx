import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blogpost from "./pages/Blogpost";
import Certification from "./pages/Certification";
import Articlespage from "./pages/Articlespage";
import Firstweek from "./components/Firstweek";
import Secondweek from "./components/Secondweek";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
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
