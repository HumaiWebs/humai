import Image from "next/image";
import Link from "next/link";
import React, { ComponentType } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function CaseStudyCard({
  title,
  description,
  category,
  industry,
  country,
  technologies,
}: {
  title: string;
  description: string;
  category: string;
  industry: string;
  country: string;
  technologies: ComponentType<{ className?: string }>[];
}) {
  return (
    <div className="w-full flex sm:flex-row flex-col-reverse rounded-lg items-stretch overflow-hidden">
      <div className="flex-1 bg-white p-10">
        <h2 className="font-normal text-lg text-gray-700">{category}</h2>
        <h3 className="font-semibold text-2xl text-gray-800">{title}</h3>
        <p className="my-2 text-gray-600">{description}</p>
        <div className="flex flex-col sm:flex-row items-start justify-between sm:items-center">
          <div className="flex gap-1 items-center">
            <p className="font-semibold text-gray-800">Industary:</p>
            <p className="text-gray-700">{industry}</p>
          </div>
          <div className="flex gap-1 items-center">
            <p className="font-semibold text-gray-800">Country:</p>
            <p className="text-gray-700">{country}</p>
          </div>
        </div>
        <div className="my-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <p className="text-gray-800 font-semibold">Core Technologies:</p>
          <div className="flex gap-4 items-center flex-wrap">
            {technologies.map((Tech, index) => {
              return (
                <div
                  key={index}
                  className="h-[50px] w-[50px] bg-white flex rounded-full items-center justify-center shadow-md"
                >
                  <Tech className="text-3xl text-tc-primary" />
                </div>
              );
            })}
          </div>
        </div>
        <Link
          href={"/"}
          className="uppercase mt-8 sm:my-0 flex items-center justify-center w-full sm:max-w-max gap-2 px-7 text-[14px] py-5 hover:bg-tc-dark hover:shadow-2xl rounded-full shadow-md bg-tc-primary text-white font-semibold"
        >
          <p>read case</p> <FaExternalLinkAlt />
        </Link>
      </div>
      <div className="w-full sm:w-[300px] h-[250px] sm:h-auto relative">
        <Image
          src={"/images/cs-1.webp"}
          alt="Case study 1"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
