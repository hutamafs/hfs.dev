import Image from "next/image";
import Link from "next/link";

export default function EducationSection() {
  const educations = [
    {
      name: "RMIT University",
      logo: "/rmit.png",
      title: "Master of Information Technology",
      year: "July 2024 - June 2026 (currently enrolled)",
      content: "",
    },
    {
      name: "Hacktivate Technology Indonesia",
      logo: "/hacktiv8.png",
      title: "Fullstack Javascript Bootcamp",
      year: "August 2020 - November 2020",
      content: "Earned Teacher's reward ( scored 100.5 out of 100 )",
    },
    {
      name: "Ritsumeikan Asia Pacific University",
      logo: "/apu.jpg",
      title: "Bachelor of Business Administration",
      year: "September 2014 - August 2018",
      content: "",
    },
    {
      name: "Frontend Masters",
      logo: "/fem.webp",
      title: "Complete Intro to React, v9",
      year: "18 Feb 2025",
      credential:
        "https://static.frontendmasters.com/ud/c/e7d18cff49/hixpadIGiV/complete-react-v9.pdf",
      content: "",
    },
    {
      name: "Frontend Masters",
      logo: "/fem.webp",
      title: "Introduction to Next.js, v3",
      year: "23 Feb 2025",
      credential:
        "https://static.frontendmasters.com/ud/c/e7d18cff49/IUcTZCIWvj/next-js-v3.pdf",
      content: "",
    },
    {
      name: "Udemy",
      logo: "/udemy.jpg",
      title: "The complete 2022 Web development Bootcamp",
      year: "23 Feb 2025",
      credential:
        "https://udemy-certificate.s3.amazonaws.com/pdf/UC-5f989359-2e5c-4633-9e23-abaa62f05678.pdf",
      content: "",
    },
  ];

  return (
    <section id="educations" className="max-w-6xl mx-auto px-8 py-16 lg:py-24">
      <div className="mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
          Education and Certifications
        </h2>
      </div>

      <div className="space-y-6">
        {educations.map((d) => (
          <div
            key={d.title}
            className="flex flex-col sm:flex-row gap-6 pb-6 border-b border-white/10 last:border-b-0"
          >
            <div className="flex gap-x-4 sm:gap-x-8">
              <div className="min-w-12 max-w-12 min-h-12 max-h-12 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={d.logo}
                  width={64}
                  height={64}
                  alt="logo"
                  className="object-cover rounded-full"
                />
              </div>
              <div className="">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {d.name}
                </h3>
                {d.credential ? (
                  <Link
                    className="cursor-pointer relative group text-[20px] group-hover:opacity-100 transition-opacity duration-200"
                    href={d.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginBottom: "8px", display: "block" }}
                  >
                    {d.title}
                  </Link>
                ) : (
                  <p className="text-lg sm:text-xl text-gray-300 mb-2">
                    {d.title}
                  </p>
                )}
                <p className="text-gray-400 mb-4">{d.year}</p>
                <ul className="space-y-1 text-gray-400">
                  <p>{d.content}</p>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
