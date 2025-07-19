import { Mail } from "lucide-react";
import Image from "next/image";

export default function ReporterInfo() {
  return (
    <div className="p-4">
    <section
      className="  flex flex-col md:flex-row border-t border-b mt-8 border-gray-300 py-6 px-4 bg-white font-sans text-black gap-6 md:gap-0"
      aria-label="Reporter Information"
    >
      {/* Left Section */}
      <div className="flex md:max-w-[400px] md:pr-8">
        {/* Avatar */}
        <div className="flex-shrink-0 mr-4">
          <Image
            className="w-[100px] h-[100px] rounded-full object-cover"
            src="/images/author.webp"
            alt="Amber PHILOUZE-ROUSSEAU"
            width={100}
            height={100}
            loading="lazy"
          />
        </div>

        {/* Info */}
        <div>
          <h3 className="font-semibold text-2xl sm:text-3xl leading-tight mb-1">
            Amber PHILOUZE-ROUSSEAU
          </h3>
          <p className="font-normal text-base sm:text-xl text-gray-900 mb-6">
            Journalist
          </p>
          <div
            className="text-[28px] mb-6 cursor-pointer select-none w-fit"
            aria-label="Send email"
            title="Send an email"
          >
            <Mail className="w-[28px] h-[28px]" />
          </div>
          <a
            href="#"
            className="underline text-[0.95rem] text-black hover:text-blue-600"
          >
            His latest articles
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:flex-1 md:pl-8 md:border-l border-gray-300" aria-label="On the same subject">
        <h2 className="font-bold text-base uppercase mb-4">
          ON THE SAME SUBJECT
        </h2>
        <ul className="list-none space-y-2">
          {[
            {
              title: "DPE: the Court of Auditors recommends creating a professional diagnostician card",
              date: "06/03/2025",
            },
            {
              title: "The energy diagnosis weighs on real estate transactions in La Vienne",
              date: "10/17/2024",
            },
            {
              title: "The rules for energy performance diagnosis will change in 2024: here what you need to know",
              date: "02/21/2024",
            },
            {
              title: "DPE: 850,000 homes will no longer be considered energy sieves",
              date: "07/09/2025",
            },
            {
              title: "Real estate: what diagnostics should be carried out before a sale? Our answers to your questions",
              date: "05/10/2021",
            },
          ].map((article, i) => (
            <li key={i} className="relative pl-4 text-[0.95rem] leading-snug">
              <span className="absolute left-0 top-0 text-black font-bold">›</span>
              <a href="#" className="underline text-black hover:text-blue-600">
                {article.title}
              </a>{' '}
              ({article.date})
            </li>
          ))}
        </ul>
      </div>
    </section>
   </div>

  );
}
