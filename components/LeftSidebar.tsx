"use client";
import React from "react";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarLinks } from "../constants/index";
import { SidebarLink } from "@/types";
import Image from "next/image";

const LeftSidebarContent = () => {
  const pathname = usePathname();
  return (
    <div className="flex h-full flex-col gap-6 ">
      {sidebarLinks.map((item: SidebarLink) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <div key={item.label}>
            <Link
              href={item.route}
              className={`
              ${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              }
              flex h-full items-center justify-center p-4 md:justify-start md:gap-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } hidden md:flex`}
              >
                {item.label}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const LeftSidebar = () => {
  return (
    <section className="background-light900_dark200 custom-scrollbar light-border sticky left-0 top-0 h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden sm:flex  lg:w-[266px]">
      <LeftSidebarContent />
      <div>
        <SignedOut>
          <div className="flex flex-col gap-3">
            <div>
              <Link href="/sign-in">
                <Button className="btn-secondary small-medium min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ">
                  <span className="primary-text-gradient">Log In</span>
                </Button>
              </Link>
            </div>
            <div>
              <Link href="/sign-up">
                <Button className="btn-tertiary light-border-2 text-dark400_light900 small-medium min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </SignedOut>
      </div>
    </section>
  );
};

export default LeftSidebar;
