"use client";
import React from "react";
import { SignOutButton, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function page() {
  const { isSignedIn } = useAuth();
  console.log(isSignedIn);

  const router = useRouter();

  function check() {
    if (!isSignedIn) {
      router.push("/sign-in");
    } else {
      return (
        <div>

        <SignOutButton>
          <button>Sign out</button>
        </SignOutButton>
        <h1>bí mật ....</h1>
        </div>
        
      );
    }
  }

  return <div>{check()}</div>;
}
