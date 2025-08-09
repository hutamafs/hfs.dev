export default function CTA() {
  return (
    <section id="contact" className="px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div
          className="
            rounded-2xl border border-white/10
            bg-gradient-to-r from-violet-600/20 via-indigo-600/20 to-sky-600/20
            backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,.5)]
            px-5 py-6 md:px-8 md:py-7
          "
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Let’s Cook a Cinematic Project
              </h3>
              <p className="text-sm text-slate-300/90">
                One clutch project at a time, your idea, my aim — let’s queue up
                🔫
              </p>
            </div>

            <a
              href="mailto:hutama.fs@gmail.com"
              className="
                inline-flex items-center justify-center gap-2
                rounded-full border border-white/15 bg-white/10
                px-4 py-2 text-sm font-medium text-white
                hover:bg-white/15 hover:border-white/25
                transition-colors
              "
              aria-label="Go to contact section"
            >
              Contact Me
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
