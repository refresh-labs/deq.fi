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
		<div
			data-aos='zoom-in-down'
			className="h-fit bg-center flex flex-col items-center pt-12 w-full bg-[url('/background.svg')] mb-44 px-4">
			<Image
				src='logo.svg'
				height={33}
				width={105}
				alt='logo'
			/>
			<Image
				src='transaction.svg'
				width={660}
				height={398}
				alt='preview'
				className='mt-20'
			/>
			<p className='md:text-5xl font-bold text-center sm:text-3xl text-2xl sm:mt-0 mt-12'>
				Native liquid staking for{" "}
				<span className='text-light-blue'>Avail</span>
			</p>
			<p
				className={`opacity-45 md:text-base text-sm font-medium mt-2 text-center ${manrope.className}`}>
				Stake your AVAIL with us to earn rewards and points
			</p>
			<Link
				href='https://testnet.deq.fi'
				className={`sm:py-3 py-2 sm:px-10 px-6 text-sm font-bold mt-8 bg-dark-blue rounded-xl ${manrope.className} sm:font-extrabold sm:text-base hover:bg-light-blue`}>
				Stake AVAIL
			</Link>
		</div>
	);
}
