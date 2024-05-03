import { Quicksand } from "next/font/google";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${quicksand.className} overflow-hidden`}
    >
      <div className="min-h-screen w-screen">
        <Hero />
      </div>
      <div className="lg:max-w-7xl w-screen">
        <Features />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
