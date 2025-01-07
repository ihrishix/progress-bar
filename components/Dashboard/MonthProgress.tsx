"use client";

import HyperText from "@/components/ui/hyper-text";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export const MonthProgress = () => {
  const [progress, setProgress] = useState("0.00000000");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const date = new Date();

    const startOfMonth = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getTime();

    const endOfMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getTime();

    const month = date.toLocaleString("default", { month: "long" });
    setMonth(month);

    setYear(date.getFullYear().toString());
    setInterval(() => {
      const timeSinceStart = new Date().getTime() - startOfMonth;
      if (timeSinceStart > endOfMonth - startOfMonth) {
        setReset(!reset);
      }

      const percentage = (timeSinceStart / (endOfMonth - startOfMonth)) * 100;

      setProgress(percentage.toFixed(7).toString());
    }, 100);

    return () => {};
  }, [reset]);
  return (
    <div className="relative z-10 text-white items-center flex justify-center">
      <div className="flex flex-col items-center text-center">
        <HyperText className="relative z-10 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          {year}
        </HyperText>
        <HyperText className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          {month}
        </HyperText>
        <span className="mb-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-300 font-sans font-bold text-4xl">
          <HyperText>month progress</HyperText>
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
