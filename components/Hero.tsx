import Image from "next/image";
import { Manrope } from "next/font/google";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const manrope = Manrope({ subsets: ["latin"] });

export default function Hero() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<div
				className={`w-full bg-dark-gray border-b border-white/10 text-white/80 text-center font-medium sm:text-sm text-xs py-3 px-4 ${manrope.className}`}>
				Deq has been discontinued. Staking is closed and the protocol is in
				withdrawal-only mode.
			</div>
			<div
				data-aos='zoom-in-down'
				className="h-fit bg-center flex flex-col items-center pt-12 w-full bg-[url('/background.svg')] mb-20 px-4">
				<Image
					src='logo.svg'
					height={33}
					width={105}
					alt='logo'
				/>
				<p className='md:text-5xl font-bold text-center sm:text-3xl text-2xl mt-16'>
					Native liquid staking for{" "}
					<span className='text-light-blue'>Avail</span>
				</p>
				<p
					className={`opacity-45 md:text-base text-sm font-medium mt-3 text-center max-w-xl ${manrope.className}`}>
					New deposits are closed. If you hold stAVAIL, you can still
					withdraw it for AVAIL at any time through the app.
				</p>
				<Link
					href='https://app.deq.fi?ref=deq.fi'
					className={`sm:py-3 py-2 sm:px-10 px-6 text-sm font-bold mt-8 bg-dark-blue rounded-xl ${manrope.className} sm:font-extrabold sm:text-base hover:bg-light-blue`}>
					Withdraw AVAIL
				</Link>
				<Image
					src='transaction.svg'
					width={660}
					height={398}
					alt='preview'
					className='mt-16'
				/>
			</div>
		</>
	);
}
