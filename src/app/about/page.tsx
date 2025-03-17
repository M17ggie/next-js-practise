"use client";
import React from "react";

import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/ ");
  };

  return (
    <div>
      <div>About</div>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
};

export default About;
