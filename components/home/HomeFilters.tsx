"use client";

import React from "react";
import { Button } from "../ui/button";

interface HomeFilterProps {
  filters: { name: string; value: string }[];
}

const HomeFilters = ({ filters }: HomeFilterProps) => {
  const active = "newest";
  return (
    <div className=" mt-10 hidden gap-3 md:flex">
      {filters.map((item) => (
        <Button
          key={item.value}
          name={item.name}
          onClick={() => {}}
          className={` ${
            active === item.value
              ? "  text-primary-100  shadow-none  dark:bg-dark-300 dark:text-light-500"
              : "text-light-500 shadow-none  dark:bg-dark-300 dark:text-light-500"
          }body-medium rounded-lg bg-light-800 px-6 py-3 capitalize `}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
