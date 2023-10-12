import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RenderTag from "../shared/RenderTag";
import Image from "next/image";

const HomeCard = () => {
  return (
    <div className="mt-10 flex w-full flex-col gap-6 background-light900_dark300 rounded-xl">
      <Card className="border-none">
        <CardHeader>
          <CardTitle className="line-clamp-1">
            The Lightning Component c:LWC_PizzaTracker generated invalid output
            for field status. Error How to solve this{" "}
          </CardTitle>
          <RenderTag name="nextjs" _id={0} />
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
            <p className="small-medium text-dark500_light700">Richard</p>
            <p className="small-medium text-dark500_light700">
              asked 35 days ago
            </p>
          </div>
          <p className=" small-medium text-dark500_light700">
            2 Answers | 1 Vote | 0 Views
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HomeCard;
