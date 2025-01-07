"use client";

import HyperText from "@/components/ui/hyper-text";
import { Progress } from "@/components/ui/progress";
import { get } from "http";
import moment from "moment";
import { useEffect, useState } from "react";

export const WeekProgress = () => {
  const [progress, setProgress] = useState("0.00000000");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [reset, setReset] = useState(false);
  const [weekStartsMonday, setWeekStartsMonday] = useState(true);

  useEffect(() => {
    const date = new Date();
    const startOfWeek = getFirstDayOfWeek(weekStartsMonday).getTime();
    const endOfWeek = getLastDayOfWeek(weekStartsMonday).getTime();

    const month = date.toLocaleString("default", { month: "long" });
    setMonth(month);
    setYear(date.getFullYear().toString());

    setInterval(() => {
      const timeSinceStart = new Date().getTime() - startOfWeek;
      if (timeSinceStart > endOfWeek - startOfWeek) {
        setReset(!reset);
      }

      const percentage = (timeSinceStart / (endOfWeek - startOfWeek)) * 100;
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
        <span className="mb-2 bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-600 font-sans font-bold text-4xl">
          <HyperText>week progress</HyperText>
        </span>

        <span className="text-6xl font-semibold relative z-10">
          {progress}%
        </span>

        <Progress
          className="h-10 w-full text-white bg-slate-800 mt-2"
          color="white"
          value={parseFloat(progress)}
        />
        <span className="mt-2 text-md text-slate-500">
          {formatDate(getFirstDayOfWeek(weekStartsMonday))} -{" "}
          {formatDate(getLastDayOfWeek(weekStartsMonday))}
        </span>
      </div>
    </div>
  );
};

function getFirstDayOfWeek(startsMonday: boolean) {
  if (startsMonday) {
    return getMonday();
  }

  return getSunday();
}

function getLastDayOfWeek(startsMonday: boolean) {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const offsetToLastSunday = (currentDay + 7) % 7;
  const nextSunday = new Date(currentDate);

  if (startsMonday) {
    nextSunday.setDate(currentDate.getDate() - offsetToLastSunday + 7);
  } else {
    nextSunday.setDate(currentDate.getDate() - offsetToLastSunday + 6);
  }

  nextSunday.setHours(23, 59, 59, 999);
  return nextSunday;
}

function getMonday() {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const offsetToLastSunday = (currentDay + 7) % 7;
  const lastMondayDate = new Date(currentDate);
  lastMondayDate.setDate(currentDate.getDate() - offsetToLastSunday + 1);
  lastMondayDate.setHours(0, 0, 0, 0);

  return lastMondayDate;
}

function getSunday() {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const offsetToLastSunday = (currentDay + 7) % 7;
  const lastSundayDate = new Date(currentDate);
  lastSundayDate.setDate(currentDate.getDate() - offsetToLastSunday);
  lastSundayDate.setHours(0, 0, 0, 0);
  return lastSundayDate;
}

function formatDate(date: Date) {
  var options = {
    weekday: "short",
    month: "long",
    day: "numeric",
  };

  // return date.toLocaleDateString(undefined, {
  //   weekday: "short",
  //   month: "long",
  //   day: "numeric",
  // } as Intl.DateTimeFormatOptions);

  return date.toLocaleDateString("en-US", options).toString();
}

function getWeekNumber() {
  return ordinal_suffix_of(moment().week());
}

function ordinal_suffix_of(i: number) {
  let j = i % 10,
    k = i % 100;
  if (j === 1 && k !== 11) {
    return i + "st";
  }
  if (j === 2 && k !== 12) {
    return i + "nd";
  }
  if (j === 3 && k !== 13) {
    return i + "rd";
  }
  return i + "th";
}

function getWeekOfMonth(input = moment()) {
  const firstDayOfMonth = input.clone().startOf("month");
  const firstDayOfWeek = firstDayOfMonth.clone().startOf("week");

  const offset = firstDayOfMonth.diff(firstDayOfWeek, "days");

  return ordinal_suffix_of(Math.ceil((input.date() + offset) / 7));
}
