import Image from "next/image";
import Link from "next/link";
import { Star, Play, ArrowRight } from "lucide-react";
import Header from "../components/header";
import FeaturedServices from "../components/featured-services";

export default function CompanyPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      {/* Hero Section */}

      <section className="w-full bg-blue-50 py-16 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div></div>
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs bg-pink-500 text-white px-2 py-0.5 rounded-full">
              IT Tech
            </span>
            <span className="text-xs bg-pink-100 text-pink-500 px-2 py-0.5 rounded-full">
              Since 2022
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Grow your Business Organic & IT Solution Technology
          </h1>
          <p className="text-gray-600 mb-6">
            In today's competitive business, the demand for efficient and
            cost-effective IT solutions has never been more critical.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2">
              GET STARTED <ArrowRight size={16} />
            </button>
            <div className="flex flex-col">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="ml-2 font-bold text-gray-900">4.8</span>
              </div>
              <span className="text-xs text-gray-500">From 200+ reviews</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-md">
          <div className="bg-blue-600 rounded-lg p-4 text-white">
            <Image
              src="/placeholder.svg?height=80&width=120"
              width={120}
              height={80}
              alt="Hand holding phone"
              className="mb-2"
            />
          </div>
          <div className="bg-orange-500 rounded-lg p-4 text-white flex flex-col justify-between">
            <div className="font-bold text-xl">150+</div>
            <div className="text-sm">Worldwide Clients</div>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((avatar) => (
                <div
                  key={avatar}
                  className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
              ))}
            </div>
          </div>
          <div className="bg-pink-500 rounded-lg p-4 text-white text-xs">
            <div className="flex items-center gap-1 mb-1">
              <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
              <span>1. Web Development</span>
            </div>
            <div className="flex items-center gap-1 mb-1">
              <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
              <span>2. UI/UX Design</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
              <span>3. Analytics & Consulting</span>
            </div>
          </div>
          <div className="bg-blue-800 rounded-lg p-4 text-white flex flex-col justify-between">
            <div className="font-bold text-3xl">88%</div>
            <div className="text-xs">Results from our IT solutions</div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="w-full bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <span className="bg-pink-100 text-pink-500 text-xs px-3 py-1 rounded-full">
              Work With
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Image
              src="/images/abraham-accountsnts.jpeg"
              width={80}
              height={30}
              alt="Brand logo"
            />
            <Image
              src="/images/ifrc.jpg"
              width={80}
              height={30}
              alt="IFRC logo"
            />
            <Image
              src="/images/Bossana_Website-0-removebg-preview.webp"
              width={80}
              height={30}
              alt="Bossana"
            />
            <Image
              src="/images/Bossana_Website-0-removebg-preview.webp"
              width={80}
              height={30}
              alt="Bossana"
            />
            <Image
              src="/images/Bossana_Website-0-removebg-preview.webp"
              width={80}
              height={30}
              alt="Bossana"
            />
            <Image
              src="/images/Bossana_Website-0-removebg-preview.webp"
              width={80}
              height={30}
              alt="Bossana"
            />
            <Image
              src="/images/Bossana_Website-0-removebg-preview.webp"
              width={80}
              height={30}
              alt="Bossana"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-gray-800 text-3xl capitalize font-semibold">
                  14+&nbsp;
                </h3>

                <p className="text-gray-500">Years of experience</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-gray-800 text-3xl capitalize font-semibold">
                  155+
                </h3>
                <p className="text-gray-500">Skilled Team</p>
              </div>
            </div>
          </div>
          <div className="md:row-span-2 bg-blue-600 p-6 rounded-lg text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-2">12000+</h3>
            <p className="text-lg mb-4">employees in 30 countries in Europe</p>
            <Image
              src="/placeholder.svg?height=150&width=250"
              width={250}
              height={150}
              alt="Team members"
              className="rounded-lg"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-gray-800 text-3xl capitalize font-semibold">
                  5K+
                </h3>
                <p className="text-gray-500">Companies Trust Us</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-gray-800 text-3xl capitalize font-semibold">
                  82%
                </h3>
                <p className="text-gray-500">Results Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Satisfaction Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Image
              src="/images/about_image_9.181dfa0dd56a59f7c2ea.webp"
              width={500}
              height={400}
              alt="Laptop with person"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                We are a
              </span>
              <span className="text-xs bg-pink-500 text-white px-2 py-0.5 rounded-full">
                Tech Co
              </span>
            </div>
            <h2 className="text-gray-800 text-3xl capitalize font-semibold">
              Our Commitment to Client Satisfaction
            </h2>
            <p className="text-gray-600 mb-6">
              At Techco, our commitment to client satisfaction is at the core of
              everything we do. We understand clients' success is our success.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Show you business the right way</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Let systems provide help your business grow</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Helping you to get better</span>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                GET STARTED <ArrowRight size={16} />
              </button>
              <button className="flex items-center gap-2 text-gray-700">
                <div className="bg-gray-100 rounded-full p-2">
                  <Play size={16} className="text-blue-600" />
                </div>
                <span>How We Works</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-3 rounded-full text-purple-600 font-bold">
              1
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Expert Team Members</h3>
              <p className="text-gray-600 text-sm">
                Experienced professionals combining expertise & creative talent
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-red-100 p-3 rounded-full text-red-600 font-bold">
              2
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">
                Fastest Customer Service
              </h3>
              <p className="text-gray-600 text-sm">
                Instant customer service available 24/7
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-full text-orange-600 font-bold">
              3
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Reasonable Pricing</h3>
              <p className="text-gray-600 text-sm">
                Competitive pricing with uncompromising service quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <FeaturedServices />

      {/* Recent Works Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="bg-pink-100 text-pink-500 text-xs px-3 py-1 rounded-full mb-2 inline-block">
              Services with ❤️ Project
            </span>
            <h2 className="text-3xl font-bold">Our Recent Best Works</h2>
            <p className="text-gray-600 mt-2">
              Our recent projects highlight our expertise in delivering tailored
              solutions that meet the unique needs and objectives of our clients
              custom software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Dashboard UI"
                className="rounded-lg mb-4"
              />
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Mobile app UI"
                className="rounded-lg mb-4"
              />
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold">Mobile App Design</h3>
                  <p className="text-gray-500 text-sm">App Design</p>
                </div>
                <Link
                  href="#"
                  className="text-blue-600 flex items-center gap-1">
                  EXPLORE <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2">
              SEE MORE <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </main>
  );
}
