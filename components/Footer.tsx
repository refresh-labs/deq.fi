import { Syne, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const syne = Syne({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center mt-32 sm:px-10 px-4">
      <div className="flex lg:flex-row flex-col gap-4 justify-center">
        <div className="bg-dark-gray rounded-2xl sm:p-8 p-4 lg:w-2/4 w-full sm:text-sm text-xs font-medium">
          <Image src="logo.svg" height={35} width={110} alt="DEQ Logo" />
          <p
            className={`py-5 flex-wrap border-b border-solid border-white border-opacity-5 ${manrope.className} text-white/30 leading-[150%] tracking-wider`}
          >
            This website is maintained by{"  "}
            <span className="text-white">Refresh Labs LLC.</span> All
            information contained herein is solely for providing information on
            the Deq ecosystem; it does not constitute an inducement or offer of
            any kind to invest in the Deq Protocol and is not directed at US
            persons.
          </p>
          <div className={`pt-5 ${manrope.className} flex`}>
            <p className="mr-auto text-white/50">© 2024 deq.fi </p>
            <Link href="#" className="lg:mr-6 mr-2 hover:text-white/50">
              Terms of service
            </Link>
            <Link href="#" className="hover:text-white/50">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:w-2/4 w-full h-auto flex-grow">
          <div className="flex gap-4 h-full flex-grow">
            <Link
              className="bg-dark-gray rounded-2xl p-8 flex items-center justify-center flex-grow hover:bg-gray"
              href="/"
            >
              <Image
                height={32}
                src="telegram-icon.svg"
                width={33}
                alt="Telegram Logo"
              />
            </Link>
            <Link
              className="bg-dark-gray rounded-2xl p-8  flex items-center justify-center flex-grow hover:bg-gray"
              href="/"
            >
              <Image height={32} src="x-icon.svg" width={33} alt="X logo" />
            </Link>
          </div>
          <div className="flex gap-4 h-full flex-grow">
            <Link
              className="bg-dark-gray rounded-2xl p-8  flex items-center justify-center flex-grow hover:bg-gray"
              href="/"
            >
              <Image
                height={32}
                src="discord-icon.svg"
                width={33}
                alt="Discord Logo"
              />
            </Link>
            <Link
              className="bg-dark-gray rounded-2xl p-8  flex items-center justify-center flex-grow hover:bg-gray"
              href="/"
            >
              <Image
                height={32}
                src="warpcast-icon.svg"
                width={33}
                alt="Warpcast Logo"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-fit flex items-center justify-center select-none">
        <Image src="footer.svg" alt="footer" width="1170" height="286" />
      </div>
    </footer>
  );
}
