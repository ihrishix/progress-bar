"use client";

import HyperText from "@/components/ui/hyper-text";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export const YearProgress = () => {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [progress, setProgress] = useState("0.00000000");
  const [year, setYear] = useState("");
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(undefined);
    }

    const date = new Date();
    const startOfYear = new Date(date.getFullYear(), 0, 1).getTime();
    const endOfYear = new Date(date.getFullYear(), 11, 31).getTime();

    setYear(date.getFullYear().toString());
    const interval = setInterval(() => {
      const timeSinceStart = new Date().getTime() - startOfYear;
      if (timeSinceStart > endOfYear - startOfYear) {
        setReset(!reset);
      }
      const percentage = (timeSinceStart / (endOfYear - startOfYear)) * 100;
      setProgress(percentage.toFixed(7).toString());
    }, 100);

    setIntervalId(interval);

    return () => {};
  }, [reset]);
  return (
    <div className="relative z-10 text-white items-center flex justify-center">
      <div className="flex flex-col items-center text-center">
        <HyperText className="relative z-10 text-lg md:text-9xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          {year}
        </HyperText>
        <span className="mb-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-300 font-sans font-bold text-4xl">
          <HyperText>year progress</HyperText>
        </span>
        <span className="text-6xl font-semibold relative z-10">
          {progress}%
        </span>
        <Progress
          className="h-10 w-full text-white bg-slate-800 mt-2"
          color="white"
          value={parseFloat(progress)}
        />
      </div>
    </div>
  );
};
