"use client";
import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";

interface CustomInputProps {
  route: string;
  iconPosition: string;
  placeholder: string;
  imgSrc: string;
  otherClasses?: string;
}

const LocalSearchbar = ({
  route,
  iconPosition,
  placeholder,
  imgSrc,
  otherClasses,
}: CustomInputProps) => {
  return (
    <div className="flex w-full">
      <div
        className={`background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
      >
        {iconPosition === "left" && (
          <Image
            src={imgSrc}
            alt="search icon"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}
        <Input
          type="text"
          placeholder={placeholder}
          value=""
          onChange={() => {}}
          className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none outline-none"
        />
        {iconPosition === "right" && (
          <Image
            src={imgSrc}
            alt="search icon"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default LocalSearchbar;
