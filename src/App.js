import React, { useState, useEffect } from "react";
import Home from "./Home";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(() => setLoading(false), 900); // Wait for fade out to finish
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className="bg-black h-screen flex justify-center items-center 
           "
      >
        <span className="font-poppins font-semibold text-3xl text-custom-pink animate-fadeBlink tracking-wide ">
          portfolio
        </span>
      </div>
    );
  }

  // Your actual website
  return (
    <html className="scroll-smooth">
      <Home />
    </html>
  );
}
