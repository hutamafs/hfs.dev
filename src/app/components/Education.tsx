import Image from "next/image";
import Link from "next/link";

type Credential = { title: string; date?: string; link: string };

type Education =
  | {
      name: string;
      logo: string;
      period: string;
      note?: string;
      // single degree
      title: string;
      content: string;
      credential?: string; // url
    }
  | {
      name: string;
      title?: string;
      logo: string;
      period: string;
      note?: string;
      // short courses
      credentials: Credential[];
      content: string;
    };

export default function EducationSection() {
  const educations: Education[] = [
    {
      name: "RMIT University",
      logo: "/rmit.png",
      title: "Master of Information Technology",
      period: "July 2024 - June 2026 (currently enrolled)",
      content: "",
    },
    {
      name: "Hacktivate Technology Indonesia",
      logo: "/hacktiv8.png",
      title: "Fullstack Javascript Bootcamp",
      period: "August 2020 - November 2020",
      content: "Earned Teacher's reward ( scored 100.5 out of 100 )",
    },
    {
      name: "Ritsumeikan Asia Pacific University",
      logo: "/apu.jpg",
      title: "Bachelor of Business Administration",
      period: "September 2014 - August 2018",
      content: "",
    },
    {
      name: "Frontend Masters",
      logo: "/fem.webp",
      period: "February 2025",
      credentials: [
        {
          title: "Complete Intro to Next.js, v3",
          link: "https://static.frontendmasters.com/ud/c/e7d18cff49/IUcTZCIWvj/next-js-v3.pdf",
          date: "18 Feb 2025",
        },
        {
          title: "Complete Intro to React, v9",
          link: "https://static.frontendmasters.com/ud/c/e7d18cff49/hixpadIGiV/complete-react-v9.pdf",
          date: "23 Feb 2025",
        },
      ],
      content: "",
    },
    {
      name: "Udemy",
      logo: "/udemy.jpg",
      title: "The complete 2022 Web development Bootcamp",
      period: "23 Feb 2025",
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
        {educations.map((education, index) => (
          <div
            key={`${education.name}-${index}`}
            className="flex flex-col sm:flex-row gap-6 pb-6 border-b border-white/10 last:border-b-0"
          >
            <div className="flex gap-x-4 sm:gap-x-8">
              <div className="min-w-12 max-w-12 min-h-12 max-h-12 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={education.logo}
                  width={64}
                  height={64}
                  alt={`${education.name} logo`}
                  className="object-cover rounded-full"
                />
              </div>
              <div className="">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {education.name}
                </h3>

                {/* handle multiple credentials (Frontend Masters) */}
                {"credentials" in education ? (
                  <div className="space-y-2 mb-2">
                    {education.credentials.map((credential, credIndex) => (
                      <Link
                        key={credIndex}
                        className="cursor-pointer relative group text-lg sm:text-xl text-gray-300 hover:text-white transition-colors duration-200 block"
                        href={credential.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {credential.title}
                        {credential.date && (
                          <span className="text-gray-500 text-sm ml-2">
                            ({credential.date})
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                ) : /* Handle single credential or title */
                education.credential ? (
                  <Link
                    className="cursor-pointer relative group text-lg sm:text-xl text-gray-300 hover:text-white transition-colors duration-200 block mb-2"
                    href={education.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {education.title}
                  </Link>
                ) : (
                  <p className="text-lg sm:text-xl text-gray-300 mb-2">
                    {education.title}
                  </p>
                )}

                <p className="text-gray-400 mb-4">{education.period}</p>
                {education.content && (
                  <p className="text-gray-400">{education.content}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
