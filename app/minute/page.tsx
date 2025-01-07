"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Overlay, Progress } from "../../components/Dashboard/Overlay";
import { MinuteProgress } from "@/components/Dashboard/MinuteProgress";

export default function Home() {
  return (
    <div className="h-screen w-full bg-black relative flex flex-col justify-center items-center antialiased">
      <div>
        <MinuteProgress />
      </div>

      <div className="absolute h-full w-full flex flex-col items-end pt-2 pr-2">
        <Overlay progressType={Progress.MINUTE} />
      </div>
      <BackgroundBeams />
    </div>
  );
}
