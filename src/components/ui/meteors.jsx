import { cn } from "@/lib/utils";
import React from "react";

export const Meteors = ({
  number,
  className
}) => {
  const meteors = new Array(number || 200).fill(true);

  return (<>
    {meteors.map((el, idx) => (
      <span
        key={"meteor" + idx}
        className={cn(
          "animate-meteor-effect absolute h-1 w-1 rounded-[9999px] bg-white shadow-[0_0_0_1px_#ffffff10]",
          "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[100px] before:h-[2px] before:bg-gradient-to-r before:from-white before:via-cyan-400 before:to-transparent before:rotate-45",
          className
        )}
        style={{
          top: Math.random() * -10 + "%", // Start above viewport
          left: Math.random() * 110 + "%", // Start across and beyond viewport width
          animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
          animationDuration: Math.floor(Math.random() * (12 - 6) + 6) + "s",
        }}></span>
    ))}
  </>);
};
