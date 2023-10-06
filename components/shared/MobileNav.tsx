"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import Image from "next/image";
import { sidebarLinks } from "../../constants/index";
import { SidebarLink } from "@/types";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((item: SidebarLink) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose asChild key={item.label}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              }
              flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/assets/icons/hamburger.svg"
            alt="Menu"
            width={36}
            height={36}
            className="invert-colors cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="background-light900_dark200 border-none"
        >
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="../../assets/images/site-logo.svg"
              alt="techoverflow"
              width={23}
              height={23}
            />
            <p className="h2-bold text-dark100_light900 flex items-center font-spaceGrotesk">
              Tech<span className="text-primary-500"> Overflow</span>
            </p>
          </Link>

          <div>
            <SheetClose asChild>
              <NavContent />
            </SheetClose>
            <SignedOut>
              <div className="flex flex-col gap-3">
                <SheetClose asChild>
                  <Link href="/sign-in">
                    <Button className="btn-secondary small-medium min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ">
                      <span className="primary-text-gradient">Log In</span>
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/sign-up">
                    <Button className="btn-tertiary light-border-2 text-dark400_light900 small-medium min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ">
                      Sign up
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </SignedOut>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
