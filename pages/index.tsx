import { Quicksand } from "next/font/google";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Head from "next/head";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Deq.fi</title>
        <meta name="description" content="" />
        <meta
          name="og:image"
          content="https://res.cloudinary.com/dczghbro7/image/upload/v1721746189/og-image_mzcne9.png"
        />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${quicksand.className} overflow-hidden`}
      >
        <div className="min-h-screen w-screen">
          <Hero />
        </div>
        <div className="w-screen max-w-[1120px]">
          <Features />
          <FAQ />
          <Footer />
        </div>
      </main>
    </>
  );
}
