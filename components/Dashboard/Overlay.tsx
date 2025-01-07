"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LitupButton } from "../ui/LitupButton";

export const Overlay = ({ progressType }: { progressType: Progress }) => {
  const router = useRouter();

  const [isLayoutVisible, setIsLayoutVisible] = useState(true); // Tracks layout visibility
  const [mouseMoved, setMouseMoved] = useState(false); // Tracks mouse activity

  useEffect(() => {
    let inactivityTimer: NodeJS.Timeout | undefined = undefined;

    // Function to reset the inactivity timer
    const resetTimer = () => {
      setMouseMoved(true); // Mark mouse as moved
      clearTimeout(inactivityTimer); // Clear any existing timer
      inactivityTimer = setTimeout(() => {
        setIsLayoutVisible(false); // Hide the layout after 5 seconds
        setMouseMoved(false);
      }, 2000);
    };

    // Add mousemove event listener
    window.addEventListener("mousemove", resetTimer);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", resetTimer);
      clearTimeout(inactivityTimer);
    };
  }, []);

  // Show the layout again when the mouse moves
  useEffect(() => {
    if (mouseMoved) {
      setIsLayoutVisible(true);
    }
  }, [mouseMoved]);

  return isLayoutVisible ? (
    <div className="relative z-10 space-x-2">
      <LitupButton
        text="Year"
        onClick={() => {
          router.push(`/year`);
        }}
        disabled={progressType == Progress.YEAR}
      />
      <LitupButton
        text="Month"
        onClick={() => {
          router.push(`/${Progress.MONTH}`);
        }}
        disabled={progressType == Progress.MONTH}
      />
      <LitupButton
        text="Week"
        onClick={() => {
          router.push(`/${Progress.WEEK}`);
        }}
        disabled={progressType == Progress.WEEK}
      />
      <LitupButton
        text="Day"
        onClick={() => {
          router.push(`/${Progress.DAY}`);
        }}
        disabled={progressType == Progress.DAY}
      />
      <LitupButton
        text="Hour"
        onClick={() => {
          router.push(`/${Progress.HOUR}`);
        }}
        disabled={progressType == Progress.HOUR}
      />
      <LitupButton
        text="Minute"
        onClick={() => {
          router.push(`/${Progress.MINUTE}`);
        }}
        disabled={progressType == Progress.MINUTE}
      />
    </div>
  ) : (
    <></>
  );
};

export enum Progress {
  YEAR = "year",
  MONTH = "month",
  WEEK = "week",
  DAY = "day",
  HOUR = "hour",
  MINUTE = "minute",
}
