"use client";

import { DayProgress } from "@/components/Dashboard/DayProgress";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Overlay, Progress } from "../../components/Dashboard/Overlay";

export default function Home() {
  return (
    <div className="h-screen w-full bg-black relative flex flex-col justify-center items-center antialiased">
      <div>
        <DayProgress />
      </div>

      <div className="absolute h-full w-full flex flex-col items-end pt-2 pr-2">
        <Overlay progressType={Progress.DAY} />
      </div>
      <BackgroundBeams />
    </div>
  );
}
