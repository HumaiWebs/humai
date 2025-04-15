import { GlobeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <section className="w-full bg-tc-dark">
      <div className="w-full flex items-center">
        <div className="w-[200px] h-[50px] bg-"></div>
        <div className="flex-1 bg-slate-100 about-clip-path-header h-[50px]"></div>
        <div className="w-[200px] h-[50px]"></div>
      </div>
      <div className="max-w-[1200px] mx-auto py-12">
        <div className="flex justify-between gap-8">
          <div className="flex-1/2 flex items-start flex-col gap-4">
            <h2 className="uppercase  text-white bg-center pr-[18px] text-[14px] pb-[15px] text-center text-lg bg-[url(/images/text-underline.svg)] bg-no-repeat bg-contain font-semibold">
              About us
            </h2>
            <h3 className="font-bold text-3xl text-tc-primary">
              <span className="text-white">Humai</span> Mission & Goal
            </h3>
            <p>
              At HumaiWebs, our mission is to empower businesses through
              innovative software solutions that streamline operations, foster
              growth, and drive success. With a strong commitment to excellence
              and customer satisfaction, we strive to deliver technology that
              makes a difference.
            </p>
          </div>
          <div className="flex-1/2 flex gap-2 items-start">
            <div></div>
            <div className="bg-[url(/images/about-white-bg.webp)] flex flex-col justify-between bg-no-repeat bg-center bg-contain w-full h-full">
              <div className="w-full flex justify-between items-start">
                <div>Users area</div>
                <div className="bg-tc-dark pr-26 pt-4">
                  <Link
                    href={"/"}
                    className="bg-tc-primary rounded-sm px-6 py-4 font-semibold"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="w-full flex justify-start">
                <div className="pl-26 pb-4">
                  <GlobeIcon size={35} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
