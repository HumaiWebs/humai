"use client";
import React, { useEffect, useState } from "react";
import CaseStudyCard from "./case-study-card";
import { FaAngular } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
const caseStudies = [
  {
    title: "Astarte Medical",
    category: "Computer Software",
    description: `Creating software for Astarte Medical involves a meticulous process aimed at addressing their specific needs and objectives. It begins with thorough research and planning to understand the requirements goals of the project.`,
    industry: "Computer",
    country: "Germany, Issum",
    technologies: [FaAngular, DiPostgresql],
    id: "1",
  },
  {
    title: "Astarte Medical",
    category: "Computer Software",
    description: `Creating software for Astarte Medical involves a meticulous process aimed at addressing their specific needs and objectives. It begins with thorough research and planning to understand the requirements goals of the project.`,
    industry: "Computer",
    country: "Germany, Issum",
    technologies: [FaAngular, DiPostgresql],
    id: "2",
  },
  {
    title: "Astarte Medical",
    category: "Computer Software",
    description: `Creating software for Astarte Medical involves a meticulous process aimed at addressing their specific needs and objectives. It begins with thorough research and planning to understand the requirements goals of the project.`,
    industry: "Computer",
    country: "Germany, Issum",
    technologies: [FaAngular, DiPostgresql],
    id: "3",
  },
];
export default function CaseStudies() {
  const [latestTouchingTop, setLatestTouchingTop] = useState();

  useEffect(() => {
    // console.log("CSs: ", caseStudies);
    if (typeof window !== "undefined") {
      document.addEventListener("scroll", (e) => {
        for (const _case of caseStudies) {
          const caseItem = document.getElementById(_case.id);
          const rect = caseItem?.getBoundingClientRect();
          if (rect?.top && rect?.top <= 0) {
            console.log(_case.id, " has scrolled to or above the top");
          }
        }
      });
    }
  }, []);
  return (
    <section className="bg-tc-dark px-[2.5%] lg:px-0 py-8">
      <h2 className="uppercase text-white bg-center pr-[18px] text-[14px] pb-[15px] text-center text-lg bg-[url(/images/text-underline.svg)] bg-no-repeat bg-contain font-semibold">
        case studies
      </h2>
      <h3 className="text-center text-3xl font-semibold my-5">
        Our Latest <span className="text-tc-primary">Case</span> Studies
      </h3>
      <div className="max-w-[1200px] mx-auto space-y-2">
        {caseStudies.map((caseStudy, index) => {
          return (
            <div
              key={caseStudy.id}
              id={caseStudy.id}
              className={`z-[${(index + 1) * 10}]`}
            >
              <CaseStudyCard
                category="Computer Software"
                title="Astarte Medical"
                country="Germany, Issum"
                description={`Creating software for Astarte Medical involves a meticulous process aimed at addressing their specific needs and objectives. It begins with thorough research and planning to understand the requirements goals of the project.`}
                industry="Computer"
                technologies={[FaAngular, DiPostgresql]}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
