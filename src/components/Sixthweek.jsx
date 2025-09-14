import { motion } from "framer-motion";
import { ArrowLeft, Code2, Calendar } from "lucide-react";
import { Link } from "react-router";
import Week6 from "../Image/Week_6new.png";
import Footer from "../components/Footer";

const Sixthweek = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-black min-h-screen"
    >
      <article className="prose prose-lg dark:prose-invert mx-auto px-4 py-28 max-w-3xl">
        {/* Breadcrumb */}
        <Link to="/" className="text-white flex gap-3 mb-6">
          <ArrowLeft className="text-1xl bg-white/20 p-2 rounded-full w-8 h-8 flex items-center justify-center" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="my-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Month 2, Week 2 Highlights 🚀
          </h1>
          <div className="flex items-center gap-6 text-gray-400 mt-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>February 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>React Native</span>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <img
          src={Week6 || "/placeholder.svg"}
          alt="cover image"
          className="w-full rounded-lg transition-transform duration-300"
        />

        {/* Article Content */}
        <div className="space-y-6 py-10 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            🚀 Wrapping up Week 6 of my React Native journey! This week pushed
            me further into building structured, reusable components while
            practicing styling and layout techniques.
          </p>

          <h2 className="text-2xl font-semibold">This week’s highlights</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Strengthened my knowledge of component reuse and props</li>
            <li>Practiced advanced Flexbox and layout strategies</li>
            <li>Focused on writing clean, maintainable styles</li>
            <li>Improved consistency across my app’s UI</li>
            <li>Learned how to structure projects better for scalability</li>
          </ul>

          <p>
            Each step is helping me get more comfortable with React Native’s
            ecosystem, and I’m excited to see my projects become more polished
            and production-ready.
          </p>

          <p>
            I’m looking forward to Week 7 where I’ll push into new functionality
            while keeping design consistency in mind. Onward and upward! 🚀
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-white/20 mt-12 pt-6 flex justify-between text-sm text-gray-500">
          <Link to="/fifthweek" className="hover:text-white/80">
            ← Previous
          </Link>
          {/* <Link to="/seventhweek" className="hover:text-white/80">
            Next →
          </Link> */}
        </div>
      </article>

      <Footer />
    </motion.div>
  );
};

export default Sixthweek;
