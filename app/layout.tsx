import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "../context/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Tech Overflow",
  description:
    " A Community driven platform for tech enthusiasts to share their knowledge and experience",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "bg-[#4b0367] hover:bg-[#f8006b]",
              footerActionLink: "hover:text-[#f8006b]",
              socialButtonsBlockButton: "bg-[#4b0367] hover:bg-[#f8006b]",
              socialButtonsBlockButtonText: "text-white",
              socialButtonsBlockButtonIcon: "text-white",
              socialButtonsBlockButtonIconHover: "text-white",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
