"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
}

const NoResult = ({ title, description, link, linkTitle }: Props) => {
  return (
    <div className="mt-10 flex w-full flex-col gap-6 justify-center items-center">
      <Image
        src="/assets/images/light-illustration.png"
        alt="no-result"
        width={270}
        height={270}
        className="flex dark:hidden object-contain"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        alt="no-result"
        width={270}
        height={270}
        className="hidden dark:flex object-contain"
      />
      <h2 className="h2-bold text-dark200_light900 mt-2">{title}</h2>
      <p className="body-regular text-dark500_light700 max-w-md my-3.5 text-center">
        {description}
      </p>
      <Link href={link}>
        <Button className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 text-light-900 hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900 px-4 py-3.5">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
