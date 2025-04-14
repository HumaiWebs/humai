import { PhoneCall } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css"; // Optional: for global styles or animations
import Header from "./header";

export default function Hero() {
  return (
    <section className="relative bg-[#05093d] min-h-screen flex flex-col">
      {/* Main Content Left Side */}
      <Header />
      <div className="text-white flex-1 w-full flex flex-col lg:flex-row items-center justify-center gap-12 overflow-hidden">
        <div className="w-full flex flex-col justify-between h-full">
          <div className="w-full flex items-center justify-center flex-col lg:flex-row">
            {/* Left Section */}
            <div className="max-w-xl space-y-6 z-10">
              {/* Top Decorative Line */}
              <div className="absolute top-[90px] left-[152px] w-full max-w-[1034px] z-[100]">
                <div className="w-full relative h-28">
                  <Image
                    src="/images/header-bottom-line.webp"
                    alt="Decorative background"
                    className="top-10 left-10 brightness-[2] object-contain w-32 opacity-40"
                    fill
                  />
                </div>
              </div>

              <p className="text-sm text-[#7a7aff] font-semibold">
                PERFECT COMPANY SOLUTION
              </p>

              <h1 className="text-4xl md:text-5xl font-bold">
                We Help Companies in{" "}
                <span className="text-[#2c6eff]">Digitizing</span> Their
                Businesses.
              </h1>

              <p className="text-gray-300">
                In today’s rapidly evolving digital landscape, staying ahead of
                the curve is essential for businesses aiming to thrive and
                succeed.
              </p>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#2c6eff] rounded-full"></span>
                  Focus on quality first
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#2c6eff] rounded-full"></span>
                  Get to the market on time
                </li>
              </ul>

              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  href="/contact"
                  passHref
                  className="bg-[#2c6eff] hover:bg-[#1d4ed8] rounded-full px-6 py-3 text-base text-white">
                  CONTACT US TODAY!
                </Link>

                <div className="flex items-center gap-2 bg-green-500 rounded-full px-6 py-3 text-white">
                  <PhoneCall size={16} />
                  <p className="text-sm">(+92) 349 1703748</p>
                </div>
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-[90px] left-[152px] w-full max-w-[1034px] z-[100]">
                <div className="w-full relative h-28">
                  <Image
                    src="/images/hero-bottom-line.webp"
                    alt="Decorative background"
                    className="top-10 left-10 brightness-[2] object-contain w-full opacity-40"
                    fill
                  />
                </div>
              </div>
            </div>

            {/* Right Section - Rotating Layers */}
            <div className="w-full lg:w-[40%] relative flex justify-center items-center">
              {/* Base Layer */}
              <Image
                src="/images/circle_engine_4.ff7d2b5855002c5b9d7f.webp"
                alt="Base Layer"
                className="absolute"
                width={500}
                height={500}
              />
              {/* Rotating Clockwise */}
              <Image
                src="/images/circle_engine_3.9ec03a6ef0dda5efc029.webp"
                alt="Rotating Layer Clockwise"
                className="absolute animate-spin-slow"
                width={450}
                height={450}
              />
              {/* Rotating Counterclockwise */}
              <Image
                src="/images/circle_engine_2.c1a725b3f7f22926cc36.webp"
                alt="Rotating Layer Anticlockwise"
                className="absolute animate-spin-reverse-slow"
                width={400}
                height={400}
              />
              {/* Top Layer */}
              <Image
                src="/images/circle_engine_1.41a566c9c404c6c0c8dc.webp"
                alt="Top Layer"
                className="absolute"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>

        {/* Decorative Overlay - Right Side */}
        <Image
          src="/images/shape_image_3.ef64cd77e2d47a683564.webp"
          alt="Decorative lines and hex boxes"
          width={400}
          height={80}
          className="brightness-[2] absolute top-[110px] right-[20px] object-contain full opacity-40"
        />

        {/* Glowing Dot and Line - Bottom Right */}
        <div className="absolute bottom-[40px] right-[40px] w-6 h-6 bg-[#2c6eff] rounded-full shadow-[0_0_15px_4px_#2c6eff] z-10" ></div>
        <Image
          src="/images/shape_image_4.7cff8112270c84d346dd.webp"
          alt="Corner Line"
          width={400}
          height={80}
          className="absolute bottom-[110px] right-[20px] opacity-30 object-contain"
        />
      </div>
    </section>
  );
}
