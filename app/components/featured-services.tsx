import React from "react";
import Image from "next/image";
import { ArrowRight, Link } from "lucide-react";

function FeaturedServices() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-pink-100 text-pink-500 text-xs px-3 py-1 rounded-full mb-2 inline-block">
            Services
          </span>
          <h3 className="text-gray-800 text-3xl capitalize font-semibold">
            Featured&nbsp;
            <span className="text-tc-primary">Services</span>
          </h3>
          <h2 className="text-3xl font-bold"> </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-600 p-6 rounded-lg text-white">
            <div className="mb-20">
              <Image
                src="/placeholder.svg?height=100&width=100"
                width={100}
                height={100}
                alt="Globe illustration"
                className="mb-4"
              />
            </div>
            <h3 className="font-bold text-xl mb-2">IT Management Services</h3>
            <div className="flex justify-between items-center mt-4">
              <div className="bg-white rounded-full p-1">
                <ArrowRight size={16} className="text-blue-600" />
              </div>
              <div className="flex gap-2">
                <span className="bg-blue-500 px-2 py-0.5 rounded text-xs">
                  Strategy
                </span>
                <span className="bg-blue-500 px-2 py-0.5 rounded text-xs">
                  Operational
                </span>
              </div>
            </div>
          </div>

          <div className="bg-orange-500 p-6 rounded-lg text-white">
            <div className="mb-20">
              <Image
                src="/placeholder.svg?height=100&width=100"
                width={100}
                height={100}
                alt="Graph illustration"
                className="mb-4"
              />
            </div>
            <h3 className="font-bold text-xl mb-2">
              Data Tracking and Security
            </h3>
            <div className="flex justify-between items-center mt-4">
              <div className="bg-white rounded-full p-1">
                <ArrowRight size={16} className="text-orange-500" />
              </div>
              <div className="flex gap-2">
                <span className="bg-orange-400 px-2 py-0.5 rounded text-xs">
                  Management
                </span>
                <span className="bg-orange-400 px-2 py-0.5 rounded text-xs">
                  Security
                </span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500 p-6 rounded-lg text-white">
            <div className="mb-20">
              <Image
                src="/images/about_image_9.181dfa0dd56a59f7c2ea.webp"
                width={100}
                height={100}
                alt="Person with laptop"
                className="mb-4"
              />
            </div>
            <h3 className="font-bold text-xl mb-2">Website Development</h3>
            <div className="flex justify-between items-center mt-4">
              <div className="bg-white rounded-full p-1">
                <ArrowRight size={16} className="text-yellow-500" />
              </div>
              <div className="flex gap-2">
                <span className="bg-yellow-400 px-2 py-0.5 rounded text-xs">
                  Development
                </span>
                <span className="bg-yellow-400 px-2 py-0.5 rounded text-xs">
                  Design
                </span>
              </div>
            </div>
          </div>

          <div className="bg-pink-500 p-6 rounded-lg text-white">
            <div className="mb-20">
              <Image
                src="/placeholder.svg?height=100&width=100"
                width={100}
                height={100}
                alt="Graph illustration"
                className="mb-4"
              />
            </div>
            <h3 className="font-bold text-xl mb-2">
              Modern Technology Solution
            </h3>
            <div className="flex justify-between items-center mt-4">
              <div className="bg-white rounded-full p-1">
                <ArrowRight size={16} className="text-pink-500" />
              </div>
              <div className="flex gap-2">
                <span className="bg-pink-400 px-2 py-0.5 rounded text-xs">
                  Consultation
                </span>
                <span className="bg-pink-400 px-2 py-0.5 rounded text-xs">
                  Analysis
                </span>
              </div>
            </div>
          </div>

          <div className="bg-indigo-800 p-6 rounded-lg text-white">
            <div className="mb-20">
              <Image
                src="/placeholder.svg?height=100&width=100"
                width={100}
                height={100}
                alt="UI design illustration"
                className="mb-4"
              />
            </div>
            <h3 className="font-bold text-xl mb-2">UI/UX Design Services</h3>
            <div className="flex justify-between items-center mt-4">
              <div className="bg-white rounded-full p-1">
                <ArrowRight size={16} className="text-indigo-800" />
              </div>
              <div className="flex gap-2">
                <span className="bg-indigo-700 px-2 py-0.5 rounded text-xs">
                  Website
                </span>
                <span className="bg-indigo-700 px-2 py-0.5 rounded text-xs">
                  Mobile App
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Link
              href="#"
              className="flex items-center gap-2 text-gray-700 font-medium">
              MORE SERVICES <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedServices;
