"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="text-center space-y-8 relative z-10">
      <div className="relative">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={48}
          priority
          className="mx-auto mb-12 invert relative"
          loading="eager"
        />
      </div>

      <h1 className="text-6xl md:text-8xl font-bold text-slate-200">
        Welcome to Next.js
      </h1>

      <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light">
        Build modern web applications with the power of React and Next.js
      </p>

      <div className="flex gap-6 justify-center mt-12">
        <Link
          href="https://nextjs.org/docs"
          className="group px-8 py-3 rounded-full bg-slate-200 text-slate-950 font-medium hover:bg-slate-100 transition-all duration-300 flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Get Started</span>
          <Image
            src="/svg/arrow-right.svg"
            alt="Arrow right"
            width={20}
            height={20}
            className="group-hover:translate-x-1 transition-transform"
            loading="eager"
          />
        </Link>
        <Link
          href="https://github.com/xanderbilla/nextjs-template"
          className="group px-8 py-3 rounded-full border border-slate-200 text-slate-200 font-medium hover:bg-slate-200 hover:text-slate-950 transition-all duration-300 flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>GitHub</span>
          <Image
            src="/svg/github.svg"
            alt="GitHub"
            width={20}
            height={20}
            className="group-hover:scale-110 transition-transform"
            loading="eager"
          />
        </Link>
      </div>
    </div>
  );
}
