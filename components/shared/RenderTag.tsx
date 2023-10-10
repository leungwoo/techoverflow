import React from "react";
import { RenderTagProps } from "../../types";
import Link from "next/link";
import { Badge } from "../ui/badge";

const RenderTag = ({ questionCount, _id, name, showCount }: RenderTagProps) => {
  return (
    <Link href={`/tags/${name}`} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        {name}
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{questionCount}</p>
      )}
    </Link>
  );
};

export default RenderTag;
