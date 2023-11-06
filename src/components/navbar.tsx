"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import DropdownMenu from "./navmenu";

const Nav = () => {
    const { data: session, status } = useSession();

    return (
<nav className="flex justify-between items-center py-6 px-10 bg-white shadow-lg">
  <Link href="/" className="font-bold text-xl text-red-600">
  LearnLingo
  </Link>
  <DropdownMenu />
  <div className="hidden sm:flex gap-x-8 text-sm font-semibold">
    <Link href="/quiz" className="text-gray-800 hover:text-red-600">
      Explore Quizzes
    </Link>
    <Link href="/leaderboard/language/all" className="text-gray-800 hover:text-red-600">
      Leaderboard
    </Link>
    {!session?.user && (
      <Link href="/register" className="text-gray-800 hover:text-red-600">
        Sign In
      </Link>
    )}
    {session?.user && (
      <>
        <Link
          href={`/profile/${session.user.id}`}
          prefetch={false}
          className="text-gray-800 hover:text-red-600"
        >
          View Profile
        </Link>
        <button
          onClick={() => {
            signOut();
          }}
          className="text-gray-800 hover:text-red-600"
        >
          Logout
        </button>
      </>
    )}
  </div>
</nav>
    );
};

export default Nav;
