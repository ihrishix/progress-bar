"use client";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { start } from "repl";

export const YearProgress = () => {
  const [progress, setProgress] = useState("0.00000000");

  useEffect(() => {
    setInterval(() => {
      const startOfYear = new Date(new Date().getFullYear(), 0, 1).getTime();
      const endOfYear = new Date(new Date().getFullYear(), 11, 31).getTime();
      const timeSinceStart = new Date().getTime() - startOfYear;
      const yearPercentage = (timeSinceStart / (endOfYear - startOfYear)) * 100;
      setProgress(yearPercentage.toFixed(7).toString());
    }, 100);

    return () => {};
  }, []);
  return (
    <div className="relative z-10 text-white items-center flex justify-center">
      <div className="flex flex-col items-center text-center">
        <h1 className="relative z-10 text-lg md:text-9xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          2025
        </h1>
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-300 font-sans font-bold text-4xl mb-2">
          year progress
        </span>
        <span className="text-6xl font-semibold relative z-10">
          {progress}%
        </span>

        <Progress
          className="h-10 w-full text-white bg-slate-800 mt-2"
          color="white"
          value={10}
        />
      </div>
    </div>
  );
};
