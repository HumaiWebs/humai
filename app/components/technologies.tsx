"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = [
  {
    name: "Web Platform",
    technologies: [
      { name: "React Js", icon: "/icons/react.png" },
      { name: "Laravel", icon: "/icons/laravel.png" },
      { name: "Ruby", icon: "/icons/ruby.png" },
    ],
  },
  {
    name: "Databases",
    technologies: [
      { name: "G318", icon: "/icons/g318.png" },
      { name: "Java", icon: "/icons/java.png" },
      { name: "Python", icon: "/icons/python.png" },
    ],
  },
  {
    name: "Cloud & DevOps",
    technologies: [
      { name: "Python", icon: "/icons/python.png" },
      { name: "Java", icon: "/icons/java.png" },
      { name: "Ruby", icon: "/icons/ruby.png" },
    ],
  },
  {
    name: "Mobile Apps",
    technologies: [
      { name: "React Js", icon: "/icons/react.png" },
      { name: "Java", icon: "/icons/java.png" },
      { name: "Python", icon: "/icons/python.png" },
    ],
  },
  {
    name: "Other Frameworks",
    technologies: [
      { name: "C++", icon: "/icons/cpp.png" },
      { name: "Laravel", icon: "/icons/laravel.png" },
      { name: "G318", icon: "/icons/g318.png" },
    ],
  },
];

export default function TechnologiesSection() {
  const [activeTab, setActiveTab] = useState("Web Platform");
  const active = tabs.find((tab) => tab.name === activeTab);

  return (
    <section className="w-full bg-tc-light font-sans flex items-center justify-center">
      <div className="w-full max-w-7xl px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-blue-800 tracking-wide uppercase">
            Our Technologies
          </p>
          <h2 className="text-4xl font-bold mt-2">
            We Use <span className="text-blue-600">Technologies</span>
          </h2>
        </div>

        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 border ${
                tab.name === activeTab
                  ? "bg-white text-blue-600 shadow-md border-blue-300"
                  : "bg-blue-100 text-blue-800 hover:bg-white hover:shadow-md border-transparent"
              }`}>
              {tab.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {active?.technologies?.map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-white p-5 rounded-2xl shadow-md w-24 h-24 flex items-center justify-center">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-blue-900 text-center">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
