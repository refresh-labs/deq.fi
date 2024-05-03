import Image from "next/image";
import { Manrope } from "next/font/google";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const manrope = Manrope({ subsets: ["latin"] });

export default function Features() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className='flex gap-4 flex-col w-screen lg:w-full sm:px-10 px-4'>
			<div className='flex md:flex-row flex-col gap-4'>
				<div
					data-aos='fade-up'
					className='relative bg-dark-gray p-6 rounded-2xl lg:w-2/3 w-full flex lg:flex-row flex-col md:justify-between items-center justify-center'>
					<Image
						src='Secure_Safebox_Digital.svg'
						width={219}
						height={166}
						alt=''
						className='block lg:hidden'
					/>
					<div className='lg:self-end mt-10'>
            <p className='text-2xl font-bold text-center lg:text-left'>
              <span className='text-light-blue'>Stake Avail</span> on Ethereum
            </p>
            <p
              className={`${manrope.className} text-sm font-medium text-white/50 mt-1 text-center lg:text-left`}
            >
              Stake your AVAIL with us to earn rewards and points
            </p>
          </div>
          <Image
            src='Secure_Safebox_Digital.svg'
            width={327}
            height={245}
            alt=''
            className='self-start hidden lg:block absolute right-8 -top-10'
          />
				</div>
				<div
					data-aos='fade-up'
					className='bg-dark-gray p-6 rounded-2xl lg:w-1/3 w-full flex flex-col items-center justify-center lg:block'>
					<Image
						src='Sound_SFX.svg'
						width={201}
						height={169}
						alt=''
					/>
					<p className='text-2xl font-bold mt-10 text-center lg:text-left'>
						Stake with any{" "}
						<span className='text-light-blue'>token</span>
					</p>
					<p
						className={`${manrope.className} text-sm font-medium text-white/50 mt-1 text-center lg:text-left`}>
						Stake your AVAIL with us to earn rewards and
						points
					</p>
				</div>
			</div>
			<div className='flex gap-4 md:flex-row flex-col '>
				<div
					data-aos='fade-up'
					className='bg-dark-gray p-6 rounded-2xl lg:w-1/3 w-full flex flex-col items-center justify-center lg:block'>
					<Image
						src='Image_Uploading.svg'
						width={223}
						height={173}
						alt=''
					/>
					<p className='text-2xl font-bold mt-10 text-center lg:text-left'>
						Track{" "}
						<span className='text-light-blue'>
							Portfolio
						</span>
					</p>
					<p
						className={`${manrope.className} text-sm font-medium text-white/50 mt-1 text-center lg:text-left`}>
						Stake your AVAIL with us to earn rewards and
						points
					</p>
				</div>
				<div
					data-aos='fade-up'
					className='bg-dark-gray p-6 rounded-2xl lg:w-2/3 w-full flex lg:flex-row flex-col md:justify-between items-center justify-center'>
					<Image
						src='Alerts_Circle.svg'
						width={180}
						height={160}
						alt=''
						className='lg:hidden'
					/>
					<div className='lg:self-end mt-10'>
						<p className='text-2xl font-bold text-center lg:text-left'>
							Earn DEQ{" "}
							<span className='text-light-blue'>
								points
							</span>
						</p>
						<p
							className={`${manrope.className} text-sm font-medium text-white/50 mt-1 text-center lg:text-left`}>
							Stake your AVAIL with us to earn rewards and
							points
						</p>
					</div>
					<Image
						src='Alerts_Circle.svg'
						width={250}
						height={239}
						alt=''
						className='self-start hidden lg:block'
					/>
				</div>
			</div>
		</div>
	);
}
