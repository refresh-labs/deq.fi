import Image from "next/image";
import { Manrope } from "next/font/google";
import Link from "next/link";

const manrope = Manrope({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="h-fit bg-center flex flex-col items-center pt-12 w-full bg-[url('/background.svg')] mb-44">
      <Image src="logo.svg" height={33} width={105} alt="logo" />
      <Image
        src="transaction.svg"
        width={660}
        height={398}
        alt="preview"
        className="mt-20"
      />
      <p className="text-5xl font-bold">
        Native liquid staking for <span className="text-light-blue">Avail</span>
      </p>
      <p
        className={`opacity-45 text-base font-medium mt-2 ${manrope.className}`}
      >
        Stake your AVAIL with us to earn rewards and points
      </p>
      <Link
        href="#"
        className={`py-3 px-10 mt-4 bg-light-blue rounded-xl ${manrope.className} font-extrabold text-base hover:bg-dark-blue`}
      >
        Stake AVAIL
      </Link>
    </div>
  );
}
