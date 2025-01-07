"use client";

import { useRouter } from "next/navigation";
import { LitupButton } from "../ui/LitupButton";
import { Router } from "next/router";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const Overlay = ({ progressType }: { progressType: Progress }) => {
  const router = useRouter();

  return (
    <div className="relative z-10 space-x-2">
      <LitupButton
        text="Year"
        onClick={() => {
          router.push(`/${Progress.YEAR}`);
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
    </div>
  );
};

export enum Progress {
  YEAR = "year",
  MONTH = "month",
  WEEK = "week",
  DAY = "day",
  HOUR = "hour",
}
