"use client";

import { useEffect } from "react";
import { YearProgress } from "./components/YearProgress";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  useEffect(() => {});
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <YearProgress />

      <BackgroundBeams />
    </div>
  );
}
