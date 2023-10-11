"use client";

import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterProps {
  filters: { name: string; value: string }[];
  filterSelect: string;
  otherClasses?: string;
  containerClass?: string;
}

const Filter = ({
  filters,
  filterSelect,
  otherClasses,
  containerClass,
}: FilterProps) => {
  return (
    <>
      <div className={`relative ${containerClass}`}>
        <Select>
          <SelectTrigger
            className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}
          >
            <div className="line-clamp-1 flex-1 text-left">
              <SelectValue placeholder={filterSelect} />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {filters.map((filter) => (
                <SelectItem
                  key={filter.name}
                  value={filter.value}
                  className="text-dark500_light700 light-border border focus:bg-light-800 dark:focus:bg-dark-400"
                >
                  {filter.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default Filter;
