import { Quicksand } from "next/font/google";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${quicksand.className} overflow-hidden`}
    >
      <div className="w-screen">
        <Hero />
      </div>
      <div className="w-screen max-w-[1120px]">
        <Footer />
      </div>
    </main>
  );
}
