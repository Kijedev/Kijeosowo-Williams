import NavbarMenu from "../components/NavbarMenu";
import Footercta from "../components/Footercta";
import Footer from "../components/Footer";
import DotBackgroundDemo from "../components/DotBackgroundDemo";
// pages
import Projects from "../pages/Projects";
import Blogpost from "../pages/Blogpost";
import Certification from "../pages/Certification";
import CardDemo from "../components/CardDemo";

const Homepage = () => {
  return (
    <section className="bg-black min-h-screen overflow-hidden">
      {/* Navbar */}
      <NavbarMenu />

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center min-h-screen space-y-6">
        <DotBackgroundDemo />
      </div>

      {/* Projects */}
      <Projects />

      <CardDemo />

      {/* Articles */}
      {/* <Blogpost /> */}

      {/* Certification */}
      <Certification />

      {/* Footer CTA */}
      <Footercta />

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default Homepage;
