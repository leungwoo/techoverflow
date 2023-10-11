"use client";

import React from "react";
import { useTheme } from "@/context/ThemeProvider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";

import { themes } from "../../constants/index";

const Theme = () => {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className="background-light900_dark200 relative border-none  shadow-none">
      <MenubarMenu>
        <MenubarTrigger>
          {mode === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              alt="sunlogo"
              width={23}
              height={23}
              className=" active-theme cursor-pointer "
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              alt="moonlogo"
              width={23}
              height={23}
              className="active-theme cursor-pointer"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="background-light900_dark200 absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300 ">
          {themes.map((item) => (
            <MenubarItem
              key={item.value}
              className="flex items-center gap-4 px-2.5 py-2  focus:bg-light-800 dark:focus:bg-dark-400 "
              onClick={() => {
                setMode(item.value);

                if (item.value !== "system") {
                  localStorage.theme = item.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
            >
              <Image
                src={item.icon}
                alt={item.value}
                width={16}
                height={16}
                className={`${
                  mode === item.value ? "active-theme" : "text-dark100_light900"
                }`}
              />
              <p
                className={`body-semibold text-light-500  ${
                  mode === item.value ? "active-theme" : "text-dark100_light900"
                }`}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
