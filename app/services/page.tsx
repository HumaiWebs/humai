import React from 'react';
import Image from 'next/image';
// import { PhoneCall } from 'lucide-react';
import Founder from '../components/Founder';
import Approach from '../components/approach';

function Page() {
  return (
    <>
      {/* Section 1 - Hero & Mission */}
      <section className="relative bg-[#05093d] min-h-[80vh] flex items-center justify-center px-4 sm:px-0">
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
              Our <span className="text-[#2c6eff]">Services</span>
            </h1>

            <p className="text-gray-300 font-bold text-xl md:text-2xl">
              Comprehensive website design and custom website development solutions that work for everyone while protecting the planet.
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">Our Mission</h2>

            <p className="text-gray-300 text-xl md:text-2xl">
              At HumAi, we believe exceptional web experiences should be accessible to all users and built with environmental responsibility in mind. Our comprehensive web development services combine technical expertise with a commitment to digital inclusion and sustainability.
              <br /><br />
              As a specialist web designer serving clients across the UK, we deliver web design UK solutions that set new standards for inclusive and sustainable digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Website Design Overview */}
      <section className="bg-tc-light py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
          {/* Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#05093d]">Website Design and Development</h2>
            <p className="text-[#05093d] text-2xl">
              Transform your digital presence with professional website design that prioritises both people and planet. We create modern, high-performing web solutions designed to be accessible to all users while minimising environmental impact through sustainable web development practices.
            </p>
          </div>

          {/* Overlapping Images */}
          <div className="w-full md:w-1/2 relative">
            <Image
              src="/images/fg.png"
              alt="Photo of Humera Khan, founder of HumAi Webs"
              width={600}
              height={300}
              className="object-cover rounded-lg w-full h-auto"
            />
            <Image
              src="/images/website.png"
              alt="Website mockup"
              width={500}
              height={400}
              className="absolute -bottom-10 -right-10 md:-bottom-16 md:-right-20 w-2/3 md:w-1/2 rounded-xl shadow-lg z-10"
            />
          </div>
        </div>
      </section>

      {/* Section 3 - Technical Details */}
      <section className="bg-tc-light py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10 px-6">
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#05093d]">Accessible-first website design</h3>
              <p className="text-[#05093d] text-2xl">
                From sleek brochure sites to advanced content-driven platforms, every website design project we deliver follows inclusive design principles:
              </p>
              <ul className="list-disc pl-6 text-[#05093d] text-xl font-semibold space-y-1">
                <li>WCAG-compliant accessibility ensuring usability for all visitors</li>
                <li>Semantic HTML structure that works with assistive technologies</li>
                <li>Inclusive UX design considering diverse abilities and needs</li>
                <li>Multi-device and cross-browser compatibility</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#05093d]">Technical excellence in website design</h3>
              <p className="text-[#05093d] text-2xl">
                Every website design and development project delivers on both functionality and values:
              </p>
              <ul className="list-disc pl-6 text-[#05093d] text-xl font-semibold space-y-1">
                <li>Fast, reliable, and secure web development</li>
                <li>Scalable architecture for future growth</li>
                <li>SEO-ready with clean, semantic code</li>
                <li>GDPR compliant with privacy-first approach</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#05093d]">Content Management Systems</h3>
              <p className="text-[#05093d] text-2xl">
                We recommend Sanity CMS for most projects due to its intuitive interface, accessibility features, and sustainable hosting. We also work with Contentful and Strapi, selecting the best CMS based on your needs and goals.
              </p>
            </div>

            <p className="text-[#05093d] text-2xl">
              Whether you're a startup or an established organisation, Humera’s mission is to deliver accessible, fast, and sustainable web solutions that help you make an impact online.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
