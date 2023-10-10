import { techButtons } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const dummyQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    link: "/question/1",
  },
  {
    id: 2,
    question: "Who wrote the play 'Romeo and Juliet'?",
    link: "/question/2",
  },
  {
    id: 3,
    question: "What is the largest planet in our solar system?",
    link: "/question/3",
  },
  {
    id: 4,
    question: "Which gas do plants absorb from the atmosphere?",
    link: "/question/4",
  },
  {
    id: 5,
    question: "What is the chemical symbol for gold?",
    link: "/question/5",
  },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 custom-scrollbar light-border sticky right-0 top-0 flex h-screen  w-[350px] flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden ">
      <div className="">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {dummyQuestions.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="flex cursor-pointer items-center justify-between"
            >
              <p className="body-medium text-dark500_light700">
                {item.question}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="rightarrow"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16 ">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {techButtons.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              questionCount={tag.count}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
