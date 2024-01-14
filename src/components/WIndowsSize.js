import React from "react";
import { useState, useEffect } from "react";

const WIndowsSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div>
      <p>{width}</p>
    </div>
  );
};

export default WIndowsSize;
