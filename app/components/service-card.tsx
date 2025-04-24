import { ArrowRight, CircleDotIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ServiceCard({
  Icon,
  title,
  points,
}: {
  Icon: React.ElementType;
  title: string;
  points: string[];
}) {
  return (
    <div className="bg-white p-8 service-card-clip flex flex-col gap-6">
      <Icon className="text-tc-primary" size={50} />
      <Link href={"/"}>
        <h2 className="font-semibold group hover:text-tc-primary text-2xl transition-colors duration-300 text-gray-800">
          {title}{" "}
          <ArrowRight className="inline group-hover:size-6 size-0 transition-all duration-300" />
        </h2>
      </Link>
      {
        <ul className="flex flex-col gap-2">
          {points.map((point) => {
            return (
              <li
                key={point}
                className="flex gap-2 items-center px-2 py-1 pl-0 text-gray-700 text-[14px] bg-gradient-to-r from-white to-tc-primary/20"
              >
                <CircleDotIcon size={16} className="text-tc-primary" /> {point}
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}
