import { Quicksand } from "next/font/google";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Head from "next/head";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function Home() {
  const encodedImageUrl =
    "https://res.cloudinary.com/dczghbro7/image/upload/v1721746189/og-image_mzcne9.png".replace(
      /\//g,
      "%2F"
    );

  return (
    <>
      <Head>
        <title>Deq Protocol</title>
        <meta
          name="description"
          content="Native liquid staking for Avail on Ethereum"
        />
        <meta property="og:title" content="Deq Protocol" />
        <meta
          property="og:description"
          content="Native liquid staking for Avail on Ethereum"
        />
        <meta property="og:image" content={encodedImageUrl} />
        <meta property="og:url" content="https://deq.fi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Deq Protocol" />
        <meta
          name="twitter:description"
          content="Native liquid staking for Avail on Ethereum"
        />
        <meta name="twitter:image" content={encodedImageUrl} />
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
