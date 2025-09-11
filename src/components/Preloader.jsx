import { useEffect, useState } from "react";

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 2 : 100));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-[#111] to-black relative z-50">
      <h1 className="text-6xl text-white mb-8 font-light">Kije Williams</h1>
      <p className="text-white text-lg pb-10">Loading Amazing Stuff...</p>
      <div className="w-64 h-2 dark:bg-neutral-600 rounded-full overflow-hidden">
        <div
          className="h-5 bg-gradient-to-r from-white to-white transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Preloader;
