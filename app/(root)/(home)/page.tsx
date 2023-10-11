"use client";

import Filter from "@/components/shared/Filter";
import LocalSearch from "@/components/shared/LocalSearchbar";
import { Button } from "@/components/ui/button";

import Link from "next/link";
// import { useAuth, useUser } from "@clerk/nextjs";
import React from "react";

import { HomePageFilters } from "@/constants/filter";
import HomeFilters from "@/components/home/HomeFilters";

export default function Home() {
  //   const { isLoaded, userId } = useAuth();
  //   const { isSignedIn, user } = useUser();

  //   if (!isLoaded || !userId || !isSignedIn) {
  //     return null;
  //   }

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark400_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] rounded-lg px-4 py-3 text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className=" mt-11 flex w-full flex-col justify-between gap-5 sm:flex-row sm:items-center md:flex-col md:items-start">
        <LocalSearch
          route="/"
          iconPosition="left"
          placeholder="Search for questions"
          imgSrc="./assets/icons/search.svg"
          otherClasses="flex"
        />
        <Filter
          filters={HomePageFilters}
          filterSelect="Select a filter"
          otherClasses="min-h-[56px] sm:min-w-[170px] "
          containerClass="max-md:flex hidden"
        />
        <HomeFilters filters={HomePageFilters} />
      </div>
    </>
  );
}
