import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <main className="flex-1 bg-white">
      <section className="w-full flex flex-col py-20 bg-tc-dark">
        <div className="flex flex-col items-center gap-4 justify-center">
          <p className="text-white text-sm flex gap-2 items-center">
            About{" "}
            <span className="flex gap-2 items-center py-1/2 px-1 rounded bg-red-400">
              <p>Us</p>
            </span>
          </p>
          <h2 className="text-4xl text-white font-semibold tracking-wide">
            About Us
          </h2>
        </div>
      </section>
      <section className="container mx-auto flex gap-10 items-strech h-[400px]">
        <div className="relative w-full h-full flex-1 overflow-hidden rounded-2xl border">
          <Image
            src={
              "https://techco-react.xpressbuddy.com/static/media/about_image_3.850a8fe7e3049d7d57e0.webp"
            }
            alt="People-Team"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-[300px] rounded-2xl border overflow-hidden"></div>
      </section>
    </main>
  );
}
