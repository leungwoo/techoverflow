"use client";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";
import React from "react";

export default function Home() {
  const { isLoaded, userId, sessionId } = useAuth();
  const { isSignedIn, user } = useUser();

  if (!isLoaded || !userId || !isSignedIn) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="h1-bold">We&apos;re coming</h1>
      <UserButton afterSignOutUrl="/sign-in" />
      <div>
        Hello, {userId} your current active session is {sessionId}
      </div>
      <div>Hello, {user.firstName} welcome to Clerk</div>
    </main>
  );
}
