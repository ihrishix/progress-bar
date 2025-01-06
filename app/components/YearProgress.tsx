"use client";

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
    <div className="flex justify-center">
      <div className="flex flex-col h-screen justify-center">
        <span className="font-semibold text-4xl">2025</span>
        <span className="font-semibold text-2xl">Year Progress</span>
        <span className="font-bold text-3xl">{progress}</span>
        <div>
          <progress value={parseFloat(progress) / 100} />
        </div>
      </div>
    </div>
  );
};
