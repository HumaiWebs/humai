import { GlobeIcon } from "lucide-react";
import Image from "next/image";
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
      <div className="max-w-[1200px] px-2 lg:px-0 mx-auto py-12">
        <div className="flex lg:flex-row flex-col justify-between gap-8">
          <div className="lg:flex-1/2 flex items-center lg:items-start flex-col gap-4">
            <h2 className="uppercase text-white bg-center pr-[18px] text-[14px] pb-[15px] text-center text-lg bg-[url(/images/text-underline.svg)] bg-no-repeat bg-contain font-semibold">
              About us
            </h2>
            <h3 className="font-bold text-3xl text-tc-primary">
              <span className="text-white">Humai</span> Mission & Goal
            </h3>
            <p className="text-center lg:text-start w-[80%] lg:w-auto">
              At HumaiWebs, our mission is to empower businesses through
              innovative software solutions that streamline operations, foster
              growth, and drive success. With a strong commitment to excellence
              and customer satisfaction, we strive to deliver technology that
              makes a difference.
            </p>
          </div>
          <div className="w-full lg:flex-1/2 flex gap-2 justify-center items-start">
            <div className="lg:block hidden relative w-[150px] h-[160px]">
              <Image
                src={"/images/person-typing.webp"}
                alt="Person typing"
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="bg-[url(/images/about-white-bg.webp)] -ml-8 flex flex-col justify-between bg-no-repeat bg-center bg-contain w-full h-full">
              <div className="w-full flex justify-between sm:justify-center gap-8 lg:justify-between items-start">
                <div className="pl-6 sm:pl-26 pt-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center">
                      {new Array(4).fill(0).map((_e, i) => {
                        return i < 3 ? (
                          <div
                            className={`rounded-full overflow-hidden h-[50px] w-[50px] ${
                              i > 0 ? `-ml-4` : ""
                            }`}
                          >
                            <div className="relative rounded-full border-2 h-full w-full">
                              <Image
                                src={"/images/user-avatar.webp"}
                                alt="User"
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="bg-tc-primary text-white flex items-center justify-center rounded-full overflow-hidden h-[50px] w-[50px] -ml-4 border-2 border-white z-[1000] text-lg font-semibold">
                            8+
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-lg text-gray-600 font-light">
                      Happy Customers
                    </p>
                  </div>
                </div>
                <div className="bg-tc-dark pr-0 mr-0 sm:mr-6 sm:pr-12 pt-3">
                  <Link
                    href={"/"}
                    className="bg-tc-primary rounded-sm px-6 py-4 font-semibold"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="w-full flex justify-between">
                <div className="pl-0 lg:pl-10 w-full pb-2 flex items-end justify-center lg:justify-between">
                  <div className="p-1 mr-14 border max-w-max max-h-max rounded-full animate-pulse">
                    <GlobeIcon size={35} />
                  </div>
                  <div className="lg:flex-1 flex justify-center items-center gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-4xl text-gray-800">3K+</p>
                      <p className="text-gray-700 text-sm">Projects Done</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-4xl text-gray-800">100%</p>
                      <p className="text-gray-700 text-sm">
                        Results Gaurenteed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
