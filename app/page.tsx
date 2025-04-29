import HeroContent from "../components/HeroContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="relative z-10">
        <HeroContent />
      </div>
    </main>
  );
}
