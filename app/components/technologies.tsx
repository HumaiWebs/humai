"use client";

import { useState } from "react";
import {
  FaReact,
  FaLaravel,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaDocker,
  FaJenkins,
  FaAndroid,
  FaApple,
  FaSwift,
  FaDatabase,
  FaCloud,
  FaBootstrap,
  FaGitAlt,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaLinux,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiDjango,
  SiRubyonrails,
  SiDotnet,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiRedis,
  SiGooglecloud,
  SiKubernetes,
  SiFlutter,
  SiKotlin,
  SiSpringboot,
  SiElectron,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

const tabs = [
  {
    name: "Web Platform",
    technologies: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Vue.js", icon: <FaVuejs /> },
      { name: "Angular", icon: <FaAngular /> },
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Ruby on Rails", icon: <SiRubyonrails /> },
      { name: "ASP.NET", icon: <SiDotnet /> },
    ],
  },
  {
    name: "Databases",
    technologies: [
      { name: "MySQL", icon: <FaDatabase /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    name: "Cloud & DevOps",
    technologies: [
      { name: "AWS", icon: <FaAws /> },
      { name: "Google Cloud", icon: <SiGooglecloud /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Jenkins", icon: <FaJenkins /> },
    ],
  },
  {
    name: "Mobile Apps",
    technologies: [
      { name: "React Native", icon: <FaReact /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Swift", icon: <FaSwift /> },
      { name: "Kotlin", icon: <SiKotlin /> },
      { name: "Java (Android)", icon: <FaAndroid /> },
    ],
  },
  {
    name: "Other Frameworks",
    technologies: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Electron", icon: <SiElectron /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    ],
  },
];

export default function TechnologiesSection() {
  const [activeTab, setActiveTab] = useState("Web Platform");
  const active = tabs.find((tab) => tab.name === activeTab);

  return (
    <section className="flex items-stretch min-h-[80vh] bg-tc-light py-20">
      <div className="flex-1 flex container max-w-[1200px] mx-auto flex-col z-[1] items-center gap-10">
        <p className="uppercase text-gray-700 bg-center pr-[18px] text-[14px] pb-[15px] text-center text-lg bg-[url(/images/text-underline.svg)] bg-no-repeat bg-contain font-semibold">
          Our Technologies
        </p>
        <h2 className="text-gray-800 text-3xl capitalize font-semibold text-center">
          We Use <span className="text-tc-primary">Technologies</span>
        </h2>

        <div className="flex justify-center gap-4 flex-wrap mb-10">
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
              <div className="bg-white p-5 rounded-2xl shadow-md w-24 h-24 flex items-center justify-center text-4xl text-blue-600">
                {tech.icon}
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
