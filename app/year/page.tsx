"use client";

import { Overlay, Progress } from "@/components/Dashboard/Overlay";
import { YearProgress } from "@/components/Dashboard/YearProgress";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div className="h-screen w-full bg-black relative flex flex-col justify-center items-center antialiased">
      <div>
        <YearProgress />
      </div>

      <div className="absolute h-full w-full flex flex-col items-end pt-2 pr-2">
        {true ? <Overlay progressType={Progress.YEAR} /> : <></>}
      </div>
      <BackgroundBeams />
    </div>
  );
}
