import Image from "next/image";

export default function Founder() {
  return (
    <div className="flex flex-col md:flex-row items-center  justify-center  w-full p-0 space-y-8">
      {/* Founder Image */} 
      <div className="flex flex-col md:flex-row items-center  justify-center max-w-7xl w-full p-0 gap-10">
      <div className="w-full md:w-1/2">
        <Image
          src="/images/humera-khan.png" // Replace with the actual image path
          alt="Photo of Hummera Khan, founder of HumAi Webs, smiling at her desk"
          width={600}
          height={300}
          className=" object-cover rounded-lg"
        />
      </div>

      {/* Founder Bio */}
      <div className="w-full md:w-1/2 text-left space-y-4 p-0">
        <h2 className="text-5xl font-bold text-[#05093d]">Meet the Founder of HumAi Webs</h2>
        <h3 className="text-2xl font-bold text-[#05093d]">Humera Khan - Founder & Mern Stack Developer</h3>
        <p className="text-[#05093d] text-2xl">
          With over 05 years of experience in website design and web development, Humera founded HumAi Webs to help businesses of all kinds thrive online through custom digital solutions that are efficient, accessible, and sustainable.
        </p>
        <p className="text-[#05093d] text-2xl">
          Over the years, she and her team have built modern websites and web applications across a wide range of industries, including:
        </p>

        {/* Fields List */}
       <p className="text-[#05093d] text-2xl font-bold"> Accounting & Finance
         Construction & Architecture,
         Human Resources & Recruitment,
          Restaurants & Food Services,
          E-commerce & Online Stores,
          Educational Platforms,
          Healthcare & Clinics,
          Technology & Startups,
          Law Firms & Legal Services,
          Beauty & Wellness,
          Real Estate,
          Nonprofits & Community Projects</p>
          
      

        <p className="text-[#05093d] text-2xl">
          Whether you're a small startup or an established organisation, Humera’s mission is to deliver accessible, fast, and sustainable web solutions that help you make an impact online.
        </p>
      </div>
    </div>
    </div>
  );
}
