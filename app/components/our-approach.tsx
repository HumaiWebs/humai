// components/Approach.tsx
export default function Approach() {
  return (
    <div className="flex flex-col  text-[#05093d]  md:flex-row items-center  justify-center  w-full p-0 space-y-8">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Our Approach Section */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold">Our approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="text-2xl">
              <h3 className="text-2xl font-semibold mb-2">Accessibility-first website design</h3>
              <p>
                We build with screen readers, keyboard navigation, and diverse user needs in mind from day one. Every website design project undergoes thorough accessibility testing to ensure it works for everyone, not just the majority.
              </p>
            </div>
            <div className="text-2xl">
              <h3 className="text-2xl font-semibold mb-2">Sustainable web development</h3>
              <p>
                Our web development services prioritise efficiency and longevity. We write clean, optimised code that reduces server loads, minimises energy consumption, and stands the test of time.
              </p>
            </div>
            <div className="text-2xl">
              <h3 className="text-2xl font-semibold mb-2">Continuous improvement</h3>
              <p>
                The web evolves, and so do accessibility standards and sustainability best practices. We provide ongoing support to ensure your digital presence continues to serve all users whilst maintaining optimal environmental performance.
              </p>
            </div>
            <div className="text-2xl">
              <h3 className="text-2xl font-semibold mb-2">Collaborative partnership</h3>
              <p>
                We work closely with our clients to understand not just their technical requirements, but their values and long-term goals. Every website project is an opportunity to align digital strategy with broader business ethics.
              </p>
            </div>
          </div>
        </div>

        {/* Why This Matters Section */}
        <div className="space-y-8 text-2xl "> 
          <h2 className="text-4xl md:text-5xl font-bold">Why this matters</h2>
          <p className="text-lg md:text-2xl max-w-4xl">
            1 in 5 people in the UK live with a disability, yet countless websites remain inaccessible to them. Meanwhile, the internet’s carbon footprint continues to grow, with websites and digital services contributing significantly to global emissions.
          </p>
          <p className="text-lg md:text-2xl max-w-4xl">
            At HumAi Webs, we’re working to change both of these realities. By specialising in inclusive and sustainable web development services, we help businesses:
          </p>
          <ul className="list-disc list-inside text-2xl   md:text-2xl space-y-2  pb-6">
            <li><strong>Reach wider audiences</strong> through genuinely accessible website design</li>
            <li><strong>Reduce environmental impact</strong> through efficient, sustainable web development</li>
            <li><strong>Future-proof their investments</strong> with standards-compliant, maintainable code</li>
            <li><strong>Align digital presence with values</strong> that matter to modern consumers through ethical web design UK practices</li>
          </ul>
        </div>
      </div>
  </div>
  );
}
