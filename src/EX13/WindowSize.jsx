import React from "react";
import { useEffect, useState } from "react";

export default function WindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return <section className="exercise"><h2>3. Window Resize Listener</h2><p>Window size: {size.width} x {size.height}</p></section>;
}
