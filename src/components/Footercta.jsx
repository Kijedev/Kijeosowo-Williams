import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
const Footercta = () => {
  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };
  return (
    <div>
      <div className="lg:text-center text-left bg-black py-20 px-5 lg:px-0">
        <motion.div
          className="inline-flex flex-col items-center gap-6 lg:px-16 px-5 py-16 rounded-3xl border-2 border-white/20"
          variants={popupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-gray-300 space-y-4">
            <h3 className="text-4xl lg:text-5xl font-light">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-xl text-stone-600">
              Let's create something amazing
            </p>
          </div>
          <div>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white inline-flex gap-2 hover:bg-[#ECE7E1] text-black rounded transition-colors duration-300 group"
            >
              Let's Work Together{" "}
              <ArrowRight className="h-3 w-3 group-hover:animate-bounce mt-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footercta;
