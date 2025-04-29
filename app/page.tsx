import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A1120] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#00FF94] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float"></div>
        <div className="absolute top-[40%] right-[15%] w-[400px] h-[400px] bg-[#00FFFF] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float-delay-2"></div>
        <div className="absolute bottom-[15%] left-[30%] w-[450px] h-[450px] bg-[#FF00FF] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float-delay-4"></div>
      </div>

      {/* Content */}
      <div className="text-center space-y-8 relative z-10">
        <div className="relative">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={48}
            priority
            className="mx-auto mb-12 invert relative"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00FFFF] animate-shimmer">
            Welcome to Next.js
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light">
          Build modern web applications with the power of React and Next.js
        </p>

        <div className="flex gap-6 justify-center mt-12">
          <a
            href="https://nextjs.org/docs"
            className="group px-8 py-3 rounded-full bg-gradient-to-r from-[#00FF94] to-[#00FFFF] text-[#0A1120] font-medium hover:shadow-[0_0_30px_-5px_#00FF94] transition-all duration-300 flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Get Started</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            href="https://github.com/xanderbilla/nextjs-template"
            className="group px-8 py-3 rounded-full border border-[#00FF94] text-[#00FF94] font-medium hover:bg-[#00FF94] hover:text-[#0A1120] transition-all duration-300 flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Corner Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00FF94] to-transparent opacity-20 blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#00FFFF] to-transparent opacity-20 blur-xl"></div>
    </div>
  );
}
