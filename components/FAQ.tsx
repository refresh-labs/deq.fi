import Image from "next/image";
import { useEffect, useState } from "react";
import { Manrope } from "next/font/google";

import AOS from "aos";
import "aos/dist/aos.css";

const manrope = Manrope({ subsets: ["latin"] });

const faqs = [
	{
		question: "What Is Deq.fi?",
		answer:
			"Lorem ipsum dolor sit amet consectetur. In feugiat purus venenatis odio ac. Eget integer tincidunt hendrerit vel a viverra neque facilisi. Luctus ac.",
	},
	{
		question: "What Is Deq.fi?",
		answer:
			"Lorem ipsum dolor sit amet consectetur. In feugiat purus venenatis odio ac. Eget integer tincidunt hendrerit vel a viverra neque facilisi. Luctus ac.",
	},
	{
		question: "What Is Deq.fi?",
		answer:
			"Lorem ipsum dolor sit amet consectetur. In feugiat purus venenatis odio ac. Eget integer tincidunt hendrerit vel a viverra neque facilisi. Luctus ac.",
	},
	{
		question: "What Is Deq.fi?",
		answer:
			"Lorem ipsum dolor sit amet consectetur. In feugiat purus venenatis odio ac. Eget integer tincidunt hendrerit vel a viverra neque facilisi. Luctus ac.",
	},
	{
		question: "What Is Deq.fi?",
		answer:
			"Lorem ipsum dolor sit amet consectetur. In feugiat purus venenatis odio ac. Eget integer tincidunt hendrerit vel a viverra neque facilisi. Luctus ac.",
	},
	{
		question: "What Is Deq.fi?",
		answer:
			"Lorem ipsum dolor sit amet consectetur. In feugiat purus venenatis odio ac. Eget integer tincidunt hendrerit vel a viverra neque facilisi. Luctus ac.",
	},
];

export default function FAQ() {
	const [openStates, setOpenStates] = useState(
		Array(faqs.length).fill(false)
	);

	useEffect(() => {
		AOS.init();
	}, []);

	const toggleQuestion = (index: number) => {
		const newOpenStates = [...openStates];
		newOpenStates[index] = !newOpenStates[index];
		setOpenStates(newOpenStates);
	};
	return (
		<div className='flex lg:flex-row flex-col w-full mt-44 sm:px-10 px-4 gap-4'>
			<p
				data-aos='fade-up'
				className='lg:w-1/2 w-full font-bold sm:text-[42px] text-2xl leading-normal'>
				Frequently <br className='hidden lg:block' />
				asked questions
			</p>
			<div className='flex flex-col gap-4 lg:w-1/2 w-full'>
				{faqs.map((faq, index) => (
					<div
						key={index}
						data-aos='fade-up'
						className='p-6 bg-dark-gray rounded-md cursor-pointer hover:bg-gray'
						onClick={() => toggleQuestion(index)}>
						<p className='flex justify-between text-normal font-bold'>
							{faq.question}
							<Image
								src={`chevron_down.svg`}
								width={16}
								height={16}
								alt='chevron-down-icon'
								className={`transition-all durration-600 ${
									openStates[index]
										? "rotate-180"
										: "rotate-0"
								}`}
							/>
						</p>

						<p
							className={`${
								manrope.className
							} text-sm font-medium text-white/75 leading-[150%] mt-2 w-4/5 transition-all duration-600 ${
								openStates[index]
									? " opacity-100 h-full"
									: " opacity-0 h-0"
							}`}>
							{faq.answer}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
