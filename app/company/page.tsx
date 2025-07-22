import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import Founder from "../components/Founder";
import Approach from "../components/our-approach";

export default function CompanyPage() {
  return (
    <>
    <section className="relative bg-[#05093d] min-h-screen flex items-center justify-center px-4 sm:px-0">
      {/* Decorative Images */}
      <div className="absolute top-0 left-0 w-1/2 h-28">
        <Image
          src="/images/header-bottom-line.webp"
          alt="Decorative background"
          className="brightness-[2] object-contain w-full opacity-40"
          fill
        />
      </div>

      <Image
        src="/images/shape_image_3.ef64cd77e2d47a683564.webp"
        alt="Decorative lines"
        width={400}
        height={80}
        className="brightness-[2] absolute top-7 right-0 w-full max-w-[328px] h-[130px] object-contain opacity-40"
      />

      {/* Main Content */}
      <div className="relative z-10 text-white max-w-7xl w-full p-6 space-y-8">
        <div className="text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            About <span className="text-[#2c6eff]">HumAi Webs</span>
          </h1>

          <p className="text-gray-300 text-xl md:text-2xl">
            HumAi Webs is a leading web development company dedicated to
            transforming your digital presence. With a team of skilled
            professionals, we specialize in creating innovative and
            user-friendly websites that drive results.
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">Our Mission</h2>

          <p className="text-gray-300 text-xl md:text-2xl">
            At HumAi, we believe the web should work for everyone whilst protecting
            the planet we all share. Our mission is to create digital experiences
            through expert website design that are genuinely accessible to all
            users, regardless of ability or circumstance, whilst minimising the
            environmental impact of every website and application we build through
            sustainable web development practices.
            <br />
            <br />
            We don't see accessibility and sustainability as optional extras or
            compliance checkboxes. They're fundamental principles that guide every
            decision we make — from the first line of code to ongoing support and
            maintenance.
          </p>

          <ul className="space-y-2 text-xl">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#2c6eff] rounded-full"></span>
              Focus on quality first
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#2c6eff] rounded-full"></span>
              Get to the market on time
            </li>
          </ul>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact"
              passHref
              className="bg-[#2c6eff] hover:bg-[#1d4ed8] rounded-full px-6 py-3 text-base text-white"
            >
              CONTACT US TODAY!
            </Link>

            <div className="flex items-center gap-2 bg-green-500 rounded-full px-6 py-3 text-white">
              <PhoneCall size={16} />
              <p className="text-sm">(+92) 349 1703748</p>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section className="flex items-stretch min-h-[80vh] bg-tc-light">
      <Founder />
     </section>
      <section className="flex items-stretch min-h-[80vh] bg-tc-light">
      <Approach />
     </section>
     


    </>
  );
}
