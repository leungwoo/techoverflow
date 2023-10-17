import React from "react";

import NoResult from "../shared/NoResult";
import QuestionCard from "../cards/QuestionCard";

const question = [
  {
    _id: 1,
    title: "How to get started with TypeScript?",
    tags: [
      { _id: 1, name: "TypeScript" },
      { _id: 2, name: "Programming" },
    ],
    author: {
      _id: 101,
      name: "John Doe",
      picture: "/images/john-doe.jpg",
    },
    createdAt: new Date("2023-09-15").toLocaleDateString(),
    answers: [],
    upvotes: 10,
    views: 120,
  },
  {
    _id: 2,
    title: "Best practices for web development",
    tags: [
      { _id: 3, name: "Web Development" },
      { _id: 4, name: "Best Practices" },
    ],
    author: {
      _id: 102,
      name: "Alice Smith",
      picture: "/images/alice-smith.jpg",
    },
    createdAt: new Date("2023-09-20").toLocaleDateString(),
    answers: [],
    upvotes: 15,
    views: 150,
  },
  {
    _id: 3,
    title: "Introduction to data science",
    tags: [
      { _id: 5, name: "Data Science" },
      { _id: 6, name: "Machine Learning" },
    ],
    author: {
      _id: 103,
      name: "Ethan Johnson",
      picture: "/images/ethan-johnson.jpg",
    },
    createdAt: new Date("2023-09-25").toLocaleDateString(),
    answers: [],
    upvotes: 8,
    views: 100,
  },
];

const HomeCard = () => {
  return (
    <div className="mt-10 flex w-full flex-col gap-6 justify-between  rounded-xl">
      {question.length > 0 ? (
        question.map((question) => (
          <QuestionCard
            _id={question._id}
            key={question._id}
            title={question.title}
            tags={question.tags}
            author={question.author}
            createdAt={new Date(question.createdAt)}
            answers={question.answers}
            upvotes={question.upvotes}
            views={question.views}
          />
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
