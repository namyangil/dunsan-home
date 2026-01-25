import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/home/HeroSection";
import { MealCard } from "@/components/dashboard/MealCard";
import { NoticeBoard } from "@/components/dashboard/NoticeBoard";
import { ArtGallery } from "@/components/gallery/ArtGallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/30">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Dashboard Section */}
      <section className="relative z-10 -mt-20 px-4 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <MealCard />
          <NoticeBoard />
        </div>
      </section>

      {/* Gallery Section */}
      <ArtGallery />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12 text-center text-zinc-500">
        <p>© 2024 Daejeon Dunsan Middle School. All rights reserved.</p>
        <p className="mt-2 text-sm text-zinc-700">Designed with Antigravity Vibe</p>
      </footer>
    </main>
  );
}
