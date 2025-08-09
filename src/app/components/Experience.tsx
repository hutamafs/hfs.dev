export default function Experience() {
  const experiences = [
    {
      dateRange: "June 2025 - Present",
      position: "Part Time Software Engineer",
      company: "Insite Project Solutions",
      desc: [
        "Created clear and structured documentation for the front-end codebase to improve code readability and onboarding for the engineering team",
        "Resolved over 20 front-end issues using debugging tools and systematic troubleshooting.",
      ],
    },
    {
      dateRange: "January 2021 - December 2023",
      position: "Front End Developer",
      company: "Hacktivate Technology Indonesia",
      desc: [
        "Engineered admin tools using React and JavaScript that reduced workflow time from 2 weeks to 1 week",
        "Architected educational admin portal with RESTful API integration using Node.js and PostgreSQL",
        "Shipped the Hacktiv8 landing page with integrated forms, improving student registration and conversion rates",
      ],
    },
    {
      dateRange: "Apr 2021 - June 2022",
      position: "Part Time Front End Developer",
      company: "Rocked Technology Indonesia",
      desc: [
        "Rebuilt the mobile web app using React Native and responsive design principles, improving performance and UX for parent users",
        "Launched a live news web platform using Firebase, reducing load times by 40% and eliminating critical bugs",
        "Implemented Firebase analytics to track user behavior patterns, enabling data-driven product improvements",
        "Secured a new partnership with a senior high school by showcasing strong UX improvements",
      ],
    },
  ];

  return (
    <section
      id="experiences"
      className="min-h-screen max-w-6xl mx-auto from-slate-900 to-slate-800 text-white py-16 px-4"
    >
      <div className="">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Work Experiences
          </h1>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="pointer-events-none hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-blue-500/70 via-blue-400/40 to-transparent" />

          <ul className="space-y-14">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;

              return (
                <li key={i} className="relative">
                  {/* Dot at center */}
                  <span
                    className="hidden md:block absolute left-1/2 top-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-500 ring-4 ring-blue-500/20"
                    aria-hidden
                  />

                  <div
                    className={[
                      "flex w-full",
                      isLeft ? "justify-start" : "justify-end",
                    ].join(" ")}
                  >
                    <article
                      className={[
                        "w-full md:w-[46%]",
                        "rounded-xl border border-white/10 bg-slate-800/60 p-6 text-slate-200 shadow-xl backdrop-blur",
                        isLeft ? "md:mr-10" : "md:ml-10",
                      ].join(" ")}
                    >
                      {/* date */}
                      <p className="text-xs uppercase tracking-wide text-slate-400">
                        {exp.dateRange}
                      </p>

                      {/* role + company */}
                      <div className="mt-2">
                        <h3 className="text-lg font-semibold text-white">
                          {exp.position}
                        </h3>
                        <p className="text-sm text-blue-300">{exp.company}</p>
                      </div>

                      {/* bullets */}
                      <ul className="mt-4 space-y-2">
                        {exp.desc.map((a, idx) => (
                          <li
                            key={idx}
                            className="flex gap-3 text-sm leading-6"
                          >
                            <span className="mt-1 select-none text-blue-400">
                              →
                            </span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
