"use client";
import React from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import Home from "./shopping-list/page";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = () => {
    gitHubSignIn();
  };

  return (
    <div className="bg-green-50 min-h-screen">
      {user && (
        <div>
          <Home />
        </div>
      )}

      {!user && (
        <div className="ml-2 mb-2 p-2">
          <h2 className="text-2xl font-bold pl-3 ml-2 mr-12 border-green-200 border-y-8">
            Please sign in to view contents
            <button
              className="bg-amber-200 text-xl m-2 p-2 rounded-lg"
              onClick={handleSignIn}
            >
              Sign in with GitHub
            </button>
          </h2>
        </div>
      )}
      <Link href="/" className="m-4 p-2">
        🔙 Home
      </Link>
    </div>
  );
}
