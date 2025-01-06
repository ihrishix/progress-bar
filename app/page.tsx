"use client";

import { useEffect } from "react";
import { YearProgress } from "./components/YearProgress";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MonthProgress } from "./components/MonthProgress";
import { WeekProgress } from "./components/WeekProgress";
import { DayProgress } from "./components/DayProgress";
import { HourProgress } from "./components/HourProgress";

export default function Home() {
  useEffect(() => {});
  return (
    <div className="h-screen w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      {/* <YearProgress /> */}
      {/* <MonthProgress /> */}
      <WeekProgress />
      {/* <DayProgress /> */}
      {/* <HourProgress /> */}
      <BackgroundBeams />
    </div>
  );
}
