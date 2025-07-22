import Image from "next/image";
import ServiceCard from "./service-card";
import { CodeIcon } from "lucide-react";

export default function Services() {
  return (
    <section className="flex items-stretch min-h-[80vh] bg-tc-light">
      <div className="w-[150px] absolute z-0 left-0 h-full flex flex-col   ">
        <div className="relative   -mt-[75px] h-[300px]">
          <Image
            src={"/images/services-left-shade.webp"}
            fill
            alt="Services Left Shade"
            className="object-contain"
          />
        </div>
        <div className="relative w-full h-[300px]">
          <Image
            src={"/images/services-left-curve.svg"}
            fill
            alt="Services Left Shade"
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex-1 flex container  mx-auto flex-col z-[1] items-center gap-8 py-12">
        <h2 className="uppercase text-gray-700 bg-center pr-[18px] text-[14px] pb-[15px] text-center text-lg bg-[url(/images/text-underline.svg)] bg-no-repeat bg-contain font-semibold">
          Our Services
        </h2>
        <h3 className="text-gray-800 text-4xl capitalize font-semibold">
          How can we&nbsp;<span className="text-tc-primary">help&nbsp;</span>you
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto gap-2 sm:gap-4 lg:gap-12 ">
          <ServiceCard 
            Icon={CodeIcon}
            title="Custom Software Development"
            points={[
              "Software Archetecture Design",
              "System Integration Services",
              "Data migration services",
              "Legacy app modernization",
            ]}
          />
          <ServiceCard
            Icon={CodeIcon}
            title="Web Application Development"
            points={[
              "Web app development services",
              "Web portal development services",
              "Website development services",
              "Offshore web development",
            ]}
          />
          <ServiceCard
            Icon={CodeIcon}
            title="Audit & IT Consulting Services"
            points={[
              "TechGuard Audit",
              "CyberSafe Audit & IT Consulting",
              "AssuranceEdge & IT Consulting",
              "IT Sentry Audit & IT Consulting",
            ]}
          />
          <ServiceCard
            Icon={CodeIcon}
            title="Custom Software Development"
            points={[
              "Software Archetecture Design",
              "System Integration Services",
              "Data migration services",
              "Legacy app modernization",
            ]}
          />
          <ServiceCard
            Icon={CodeIcon}
            title="Custom Software Development"
            points={[
              "Software Archetecture Design",
              "System Integration Services",
              "Data migration services",
              "Legacy app modernization",
            ]}
          />
          <ServiceCard
            Icon={CodeIcon}
            title="Custom Software Development"
            points={[
              "Software Archetecture Design",
              "System Integration Services",
              "Data migration services",
              "Legacy app modernization",
            ]}
          />
        </div>
      </div>
      <div className="w-[150px] z-[0] absolute right-0">
        <div className="relative w-full h-[400px]">
          <Image
            src={"/images/services-right-curve.svg"}
            fill
            alt="Services Left Shade"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
