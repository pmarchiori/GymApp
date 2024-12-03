import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          ON <span className="text-green-50">SHAPE</span>
        </h1>
      </div>

      <p className="text-sm md:text-base font-light">
        Design your ultimate workout regimen,{" "}
        <span className="text-green-50 font-medium">
          unleash your full potential
        </span>{" "}
        with maximum intensity in every gym session,{" "}
        <span className="text-green-50 font-medium">
          push your limits like never before,{" "}
        </span>
        recover like a champion, and repeat relentlessly to build{" "}
        <span className="text-green-50 font-medium">
          unparalleled size and strength.
        </span>
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Let's do it!"}
      />
    </div>
  );
}
