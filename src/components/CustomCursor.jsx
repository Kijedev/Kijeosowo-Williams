import React from "react";

import { useState, useEffect, useRef } from "react";

const CustomCursor = () => {
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setTargetPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const followCursor = () => {
      if (cursorRef.current) {
        const currentX = parseFloat(cursorRef.current.style.left || 0);
        const currentY = parseFloat(cursorRef.current.style.top || 0);

        const nextX = currentX + (targetPosition.x - currentX) * 0.1;
        const nextY = currentY + (targetPosition.y - currentY) * 0.1;

        cursorRef.current.style.left = `${nextX}px`;
        cursorRef.current.style.top = `${nextY}px`;

        requestAnimationFrame(followCursor);
      }
    };

    followCursor();
  }, [targetPosition]);

  return (
    <div
      ref={cursorRef}
      className="z-[999] fixed w-10 h-10 border border-stone-600 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
      style={{
        left: "0px",
        top: "0px",
      }}
    />
  );
};

export default CustomCursor;
