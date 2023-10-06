"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import React from "react";

export default function Home() {
  const { isLoaded, userId } = useAuth();
  const { isSignedIn, user } = useUser();

  if (!isLoaded || !userId || !isSignedIn) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="h1-bold">Welcome to CryptoBull</h1>

      <div>Hello, {user.fullName}, Clerk has you covered!</div>
    </main>
  );
}
