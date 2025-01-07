"use client";

import HyperText from "@/components/ui/hyper-text";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export const HourProgress = () => {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [progress, setProgress] = useState("0.00000000");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [year, setYear] = useState("");
  const [min, setMin] = useState("");
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(undefined);
    }

    const date1 = new Date();
    const date2 = new Date();
    const date = new Date();
    date1.setHours(date.getHours(), 0, 0, 0);
    date2.setHours(date.getHours(), 59, 59, 999);

    const startOfHour = date1.getTime();
    const endOfHour = date2.getTime();

    const month = date.toLocaleString("default", { month: "long" });
    setMonth(month);
    setYear(date.getFullYear().toString());
    setHour(date.getHours().toString());
    setMin(date.getMinutes().toString());

    const interval = setInterval(() => {
      const timeSinceStart = new Date().getTime() - startOfHour;
      if (timeSinceStart > endOfHour - startOfHour) {
        setReset(!reset);
      }

      const percentage = (timeSinceStart / (endOfHour - startOfHour)) * 100;
      setProgress(percentage.toFixed(7).toString());
    }, 100);
    setIntervalId(interval);

    return () => {};
  }, [reset]);
  return (
    <div className="relative z-10 text-white items-center flex justify-center">
      <div className="flex flex-col items-center text-center">
        <HyperText className="relative z-10 text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          {year + " " + month}
        </HyperText>
        <HyperText className="relative z-10 text-lg md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          {hour + ":" + min}
        </HyperText>
        <span className="mb-2 bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-600 font-sans font-bold text-4xl">
          <HyperText>hour progress</HyperText>
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
