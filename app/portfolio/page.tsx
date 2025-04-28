import React from "react";

export type Project = {
  projectType: string;
  category: string;
  title: string;
  services: string[];
  client: string;
  location: string;
  description: string;
};

function PortfolioPage() {
  return (
    <main className="flex-1 bg-white">
      <section className="w-full flex flex-col py-20 bg-tc-dark">
        <div className="flex flex-col items-center gap-4 justify-center">
          <p className="text-white text-sm flex gap-2 items-center">
            Our{" "}
            <span className="flex gap-2 items-center py-1/2 px-1 rounded bg-red-400">
              <p>Portfolio</p>
            </span>
          </p>
          <h2 className="text-4xl text-white font-semibold tracking-wide">
            Our Portfolio
          </h2>
        </div>
      </section>
    </main>
  );
}

export default PortfolioPage;
