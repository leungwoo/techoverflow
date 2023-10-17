import React from "react";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import RenderTag from "../shared/RenderTag";
import Image from "next/image";
import Link from "next/link";

type Question = {
  _id: number;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: number;
    name: string;
    picture: string;
  };
  createdAt: Date;
  answers: Array<object>;
  upvotes: number;
  views: number;
};

const QuestionCard = ({
  title,
  tags,
  author,
  createdAt,
  answers,
  upvotes,
  views,
  _id,
}: Question) => {
  return (
    <div className="card-wapper bg-light-900 dark:dark-gradient p-9 rounded-[10px] sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <Link
            href={`/question/${_id}`}
            className="line-clamp-1 text-dark200_light900"
          >
            <h3 className="sm:h3-semibold base-semibold flex-1 text-dark200_light900 line-clamp-1">
              {title}
            </h3>
          </Link>
          <span className="subtle-regular text-dark400_light700 sm:flex hidden line-clamp-1">
            {String(createdAt)}
          </span>
        </div>
        {/*if signed in add edit and delete actions */}
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <RenderTag name={tag.name} _id={tag._id} key={tag._id} />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;

// <Card>
// <CardHeader>
//   <CardTitle className="line-clamp-1 text-dark200_light900">
//     {title}{" "}
//   </CardTitle>
//   <RenderTag name={tags[0].name} _id={_id} />
// </CardHeader>
// <CardFooter className="flex justify-between items-center flex-wrap">
//   <div className="flex gap-2 items-center">
//     <Image
//       src="/assets/icons/avatar.svg"
//       alt="avatar"
//       width={20}
//       height={20}
//       className="invert-colors"
//     />
//     <p className="small-medium text-dark500_light700">{author.name}</p>
//     <p className="small-medium text-dark500_light700">
//       {String(createdAt)}
//     </p>
//   </div>
//   <p className=" small-medium text-dark500_light700">
//     Answers{JSON.stringify(answers)} | 1 Vote{upvotes} | 0 Views
//     {views}
//   </p>
// </CardFooter>
// </Card>
