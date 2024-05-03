import Image from "next/image";
import { useState } from "react";
import { Manrope } from "next/font/google";

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
  const [openStates, setOpenStates] = useState(Array(faqs.length).fill(false));

  const toggleQuestion = (index: number) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };
  return (
    <div className="flex w-full mt-44">
      <p className="w-1/2 font-bold text-[42px] leading-normal">
        Frequently <br />
        asked questions
      </p>
      <div className="flex flex-col gap-4 w-1/2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-6 bg-dark-gray rounded-md cursor-pointer hover:bg-gray"
            onClick={() => toggleQuestion(index)}
          >
            <p className="flex justify-between text-normal font-bold">
              {faq.question}
              <Image
                src={`chevron_${openStates[index] ? "up" : "down"}.svg`}
                width={16}
                height={16}
                alt="chevron-down-icon"
              />
            </p>
            {openStates[index] && (
              <p
                className={`${manrope.className} text-sm font-medium text-white/75 leading-[150%] mt-2 w-4/5`}
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
