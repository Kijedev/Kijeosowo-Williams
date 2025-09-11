import { useState, useEffect } from "react";
// components
import Preloader from "../components/Preloader";
import NavbarMenu from "../components/NavbarMenu";
import Footercta from "../components/Footercta";
import Footer from "../components/Footer";
import DotBackgroundDemo from "../components/DotBackgroundDemo";
// pages
import Projects from "../pages/Projects";
import Blogpost from "../pages/Blogpost";
import Certification from "../pages/Certification";

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <section className="bg-gradient-to-br from-black via-[#111] to-black min-h-screen overflow-hidden">
      {/* Navbar */}
      <NavbarMenu />

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center min-h-screen space-y-6">
        <DotBackgroundDemo />
      </div>

      {/* Projects */}
      <Projects />

      {/* Articles */}
      <Blogpost />

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
