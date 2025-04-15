import React from "react";
import CaseStudyCard from "./case-study-card";

export default function CaseStudies() {
  return (
    <section className="bg-tc-dark py-8">
      <h2 className="uppercase text-white bg-center pr-[18px] text-[14px] pb-[15px] text-center text-lg bg-[url(/images/text-underline.svg)] bg-no-repeat bg-contain font-semibold">
        case studies
      </h2>
      <h3 className="text-center text-3xl font-semibold my-5">
        Our Latest <span className="text-tc-primary">Case</span> Studies
      </h3>
      <div className="max-w-[1200px] mx-auto">
        <CaseStudyCard />
      </div>
    </section>
  );
}
