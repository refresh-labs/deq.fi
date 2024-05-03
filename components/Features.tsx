import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function Features() {
  return (
    <div className="flex gap-4 flex-col w-full px-10">
      <div className="flex gap-4">
        <div className="bg-dark-gray p-6 rounded-2xl w-2/3">
          <Image
            src="Secure_Safebox_Digital.svg"
            width={219}
            height={166}
            alt=""
          />
          <p className="text-2xl font-bold mt-10">
            <span className="text-light-blue">Stake Avail</span> on Ethereum
          </p>
          <p
            className={`${manrope.className} text-sm font-medium text-white/50 mt-1`}
          >
            Stake your AVAIL with us to earn rewards and points
          </p>
        </div>
        <div className="bg-dark-gray p-6 rounded-2xl w-1/3">
          <Image src="Sound_SFX.svg" width={201} height={169} alt="" />
          <p className="text-2xl font-bold mt-10">
            Stake with any <span className="text-light-blue">token</span>
          </p>
          <p
            className={`${manrope.className} text-sm font-medium text-white/50 mt-1`}
          >
            Stake your AVAIL with us to earn rewards and points
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="bg-dark-gray p-6 rounded-2xl w-1/3">
          <Image src="Image_Uploading.svg" width={223} height={173} alt="" />
          <p className="text-2xl font-bold mt-10">
            Track <span className="text-light-blue">Portfolio</span>
          </p>
          <p
            className={`${manrope.className} text-sm font-medium text-white/50 mt-1`}
          >
            Stake your AVAIL with us to earn rewards and points
          </p>
        </div>
        <div className="bg-dark-gray p-6 rounded-2xl w-2/3 flex justify-between">
          <div className="self-end">
            <p className="text-2xl font-bold mt-10">
              Earn DEQ <span className="text-light-blue">points</span>
            </p>
            <p
              className={`${manrope.className} text-sm font-medium text-white/50 mt-1`}
            >
              Stake your AVAIL with us to earn rewards and points
            </p>
          </div>
          <Image
            src="Alerts_Circle.svg"
            width={250}
            height={239}
            alt=""
            className="self-start"
          />
        </div>
      </div>
    </div>
  );
}
