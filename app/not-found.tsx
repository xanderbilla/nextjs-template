import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-bold text-slate-200">404</h1>
        <h2 className="text-4xl text-slate-300">Page Not Found</h2>
        <p className="text-slate-400 text-lg max-w-md mx-auto">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-4 px-8 py-3 rounded-full bg-slate-200 text-slate-950 font-medium hover:bg-slate-100 transition-all duration-300"
        >
          <span>Return Home</span>
          <span className="text-xl">→</span>
        </Link>
      </div>
    </div>
  );
}
