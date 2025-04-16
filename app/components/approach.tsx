"use client";
import React, { useState } from "react";

const steps = [
  {
    title: "Discovery Phase",
    description:
      "We start by deeply understanding your goals, challenges, and target audience. This phase involves research, stakeholder interviews, and requirement gathering to ensure a strategic foundation for the project.",
  },
  {
    title: "Design and Development",
    description:
      "With insights from the discovery phase, our team crafts intuitive designs and develops scalable, high-performance solutions. This step combines creativity with technical expertise to bring your vision to life.",
  },
  {
    title: "Implementation",
    description:
      "With insights from the discovery phase, our team crafts intuitive designs and develops scalable, high-performance solutions. This step combines creativity with technical expertise to bring your vision to life.",
  },
  {
    title: "Maintenance",
    description:
      "Our support doesn’t end after launch. We provide ongoing maintenance to ensure your product stays up-to-date, secure, and fully functional—so you can focus on growth while we handle the tech.",
  },
  {
    title: "Deployment",
    description:
      "Once everything is tested and approved, we move forward with deployment. Our team ensures a smooth launch with minimal downtime, whether it’s on the cloud, on-premises, or app stores.",
  },
  {
    title: "Testing and QA",
    description:
      "Quality is non-negotiable. We run extensive testing and quality assurance checks at every stage to catch bugs early and deliver a product that meets the highest standards.",
  },
];

function Approach() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleStepClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="w-full bg-[#e8f1fc] font-sans">
      {/* Header banner */}
      <div className="w-full flex items-center">
        <div className="w-[200px] h-[50px] bg-"></div>
        <div className="flex-1 bg-tc-light about-clip-path-header h-[50px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto py-16 px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="md:w-1/2 flex flex-col gap-4">
            <h2 className="uppercase text-[#0f3e77] text-sm font-semibold tracking-wider bg-[url(/images/text-underline.svg)] bg-no-repeat bg-left-bottom pb-2 pl-6 relative">
              WORKING PROCESS
            </h2>

            <h3 className="text-4xl font-bold text-[#0f3e77] leading-tight">
              Our <span className="text-[#0453f3]">Approach</span>
            </h3>

            <div className="flex flex-col divide-y divide-[#b4c7e7] mt-4">
              {steps.map((step, index) => (
                <div key={index} className="py-4">
                  <button
                    onClick={() => handleStepClick(index)}
                    className="w-full text-left flex justify-between items-center"
                  >
                    <span className="text-[#0f3e77] font-medium text-lg">
                      {String(index + 1).padStart(2, "0")}. {step.title}
                    </span>
                    <span className="text-2xl font-bold text-[#0f3e77]">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {activeIndex === index && step.description && (
                    <div className="mt-4 bg-[#cce1f9] text-[#0f3e77] text-sm p-4 rounded-md leading-relaxed">
                      {step.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:w-1/2 flex flex-col items-center gap-6 mt-8 md:mt-0">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => handleStepClick(index)}
                className={`w-[280px] h-[80px] flex items-center justify-center text-center text-base font-semibold transition-all duration-300 rounded-full focus:outline-none ${
                  index === activeIndex
                    ? "bg-[#0453f3] text-white scale-105 shadow-lg"
                    : "border border-[#0f3e77] text-[#0f3e77] bg-white"
                }`}
              >
                {step.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Approach;
