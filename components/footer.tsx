import { getToday } from "@/lib/utils";
import React from "react";

export default function Footer() {
  // console.log(process.env.BUILD_TIME, "BUILD_TIME");
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs" id="small">
        &copy; 2030 Evan. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website: </span>
        Next.js & updated at {process.env.BUILD_TIME || '2024-02-28'}
      </p>
    </footer>
  );
}
