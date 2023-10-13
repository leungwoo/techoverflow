import React from "react";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import RenderTag from "../shared/RenderTag";
import Image from "next/image";
import NoResult from "../shared/NoResult";

type Question = {
  _id: number;
  title: string;
  tags: {
    _id: number;
    name: string;
  }[];
  author: string;
  createdAt: string;
  answers: number;
  upvotes: number;
  views: number;
};

const question: Question[] = [
  {
    _id: 0,
    title: "Nextjs is amazing and JSMastey is the best place to learn it",
    tags: [
      {
        _id: 0,
        name: "nextjs",
      },
      { _id: 1, name: "reactjs" },
    ],
    author: "Richard",
    createdAt: "35 days ago",
    answers: 2,
    upvotes: 1,
    views: 0,
  },
  {
    _id: 0,
    title: "Tailwind is amazing and JSMastey is the best place to learn it",
    tags: [
      {
        _id: 0,
        name: "Tailwindcss",
      },
      { _id: 1, name: "reactjs" },
    ],
    author: "Kelly",
    createdAt: "30 days ago",
    answers: 20,
    upvotes: 10,
    views: 30,
  },
];

const HomeCard = () => {
  return (
    <div className="mt-10 flex w-full flex-col gap-6 justify-between  rounded-xl">
      {question.length > 0 ? (
        question.map((question) => (
          <Card
            className="border-none background-light900_dark300"
            key={question._id}
          >
            <CardHeader>
              <CardTitle className="line-clamp-1">{question.title} </CardTitle>
              <RenderTag name={question.tags[0].name} _id={question._id} />
            </CardHeader>
            <CardFooter className="flex justify-between items-center flex-wrap">
              <div className="flex gap-2 items-center">
                <Image
                  src="/assets/icons/avatar.svg"
                  alt="avatar"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
                <p className="small-medium text-dark500_light700">
                  {question.author}
                </p>
                <p className="small-medium text-dark500_light700">
                  {question.createdAt}
                </p>
              </div>
              <p className=" small-medium text-dark500_light700">
                Answers:{question.answers} | 1 Vote:{question.upvotes} | 0
                Views:
                {question.views}
              </p>
            </CardFooter>
          </Card>
        ))
      ) : (
        <NoResult
          title=" There are no question to show"
          description=" Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡"
          link="/ask-question"
          linkTitle="Ask a Question"
        />
      )}
    </div>
  );
};

export default HomeCard;
