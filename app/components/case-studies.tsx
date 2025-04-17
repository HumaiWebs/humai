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
    style: {},
  },
  {
    title: "Astarte Medical",
    category: "Computer Software",
    description: `Creating software for Astarte Medical involves a meticulous process aimed at addressing their specific needs and objectives. It begins with thorough research and planning to understand the requirements goals of the project.`,
    industry: "Computer",
    country: "Germany, Issum",
    technologies: [FaAngular, DiPostgresql],
    id: "2",
    style: {},
  },
  {
    title: "Astarte Medical",
    category: "Computer Software",
    description: `Creating software for Astarte Medical involves a meticulous process aimed at addressing their specific needs and objectives. It begins with thorough research and planning to understand the requirements goals of the project.`,
    industry: "Computer",
    country: "Germany, Issum",
    technologies: [FaAngular, DiPostgresql],
    id: "3",
    style: {},
  },
];
export default function CaseStudies() {
  const [latestTouchingTop, setLatestTouchingTop] = useState<string | null>(
    null
  );

  const [items, setItems] = useState(caseStudies);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let lastScrollTop = 0;
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollingDown = scrollTop > lastScrollTop;

      for (const _case of caseStudies) {
        const caseItem = document.getElementById(_case.id);
        const rect = caseItem?.getBoundingClientRect();

        if (rect) {
          if (rect?.top <= 0 && scrollingDown) {
            setItems((prev) => {
              return prev.map((pi) => {
                const nextId = (Number(_case.id) + 1).toString();

                if (pi.id === _case.id) {
                  pi.style = {
                    ...pi.style,
                    position: "sticky",
                    top: "10px",
                    zIndex: Number(_case.id) * 2 * 10,
                  };
                }

                if (pi.id === nextId) {
                  const element = document.getElementById(nextId);
                  if (element) {
                    const marginTop = Math.min(
                      rect.top * -1,
                      window.innerHeight - 10
                    );
                    pi.style = {
                      ...pi.style,
                      top: `-${marginTop}px`,
                      position: "sticky",
                      zIndex: Number(pi.id) + 100,
                    };
                  }
                }
                return pi;
              });
            });
          } else {
            // setItems((prev) => {
            //   return prev.map((pi) => {
            //     const nextId = (Number(_case.id) + 1).toString();
            //     if (scrollingDown) {
            //       if (pi.id === _case.id) {
            //         pi.style = {
            //           position: "sticky",
            //           top: "10px",
            //           zIndex: Number(_case.id) * 2 * 10,
            //         };
            //       }
            //       if (pi.id === nextId) {
            //         const element = document.getElementById(nextId);
            //         if (element) {
            //           const marginTop = Math.min(
            //             rect.top * -1,
            //             window.innerHeight - 10
            //           );
            //           console.log("Margin Top: ", marginTop);
            //           element.style.marginTop = `${marginTop}px`;
            //           pi.style = {
            //             ...pi.style,
            //             top: `-${marginTop}px`,
            //             position: "sticky",
            //             zIndex: Number(pi.id) + 100,
            //           };
            //         }
            //       }
            //     }
            //     return pi;
            //   });
            // });
          }
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Avoid negative scroll console.log(_case.id, " not at or over the top");
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="bg-tc-dark z-[100000] px-[2.5%] lg:px-0 py-8">
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
              className={`z-[${(index + 1) * 100}]`}
              style={{ ...caseStudy.style }}
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
