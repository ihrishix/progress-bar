"use client";

import HyperText from "@/components/ui/hyper-text";
import { Progress } from "@/components/ui/progress";
import { ordinal_suffix_of } from "@/lib/helper";
import { useEffect, useState } from "react";

export const DayProgress = () => {
  const [progress, setProgress] = useState("0.00000000");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [dayName, setDayName] = useState("");
  const [year, setYear] = useState("");
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const date1 = new Date();
    const date2 = new Date();
    const date = new Date();
    date1.setHours(0, 0, 0, 0);
    date2.setHours(23, 59, 59, 999);

    const startOfDay = date1.getTime();
    const endOfDay = date2.getTime();

    const month = date.toLocaleString("default", { month: "long" });
    setMonth(month);
    setYear(date.getFullYear().toString());
    setDay(ordinal_suffix_of(date.getDate()));
    setDayName(date.toLocaleDateString("en-US", { weekday: "long" }));

    setInterval(() => {
      const timeSinceStart = new Date().getTime() - startOfDay;
      if (timeSinceStart > endOfDay - startOfDay) {
        setReset(!reset);
      }

      const percentage = (timeSinceStart / (endOfDay - startOfDay)) * 100;
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
        <HyperText className="p-2 relative z-10 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-semibold">
          {dayName + "," + day + " " + month}
        </HyperText>
        <span className="mb-2 bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-600 font-sans font-bold text-4xl">
          <HyperText>day progress</HyperText>
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
