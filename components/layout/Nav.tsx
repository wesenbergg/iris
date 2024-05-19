import React from "react";
import Link from "../essentials/Link";
import { default as NextLink } from "next/link";
import { cn } from "@/utils/cn";
import { Satisfy } from "next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

const Nav: React.FC = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav className="flex flex-row items-center justify-between bg-gradient-to-b from-sky-900 via-sky-950 to-black px-8 py-1">
      <ul className="flex items-center justify-center space-x-4">
        <li>
          <NextLink href="/">
            <span className={cn("my-8 mr-[-20px] text-4xl")}>🔮</span>
            <span
              className={cn(
                "text-2xl text-white drop-shadow-xl",
                satisfy.className,
              )}
              style={{
                verticalAlign: "super",
                textShadow: "#FC0 1px 0 10px",
              }}
            >
              Iris
            </span>
          </NextLink>
        </li>
        <li>
          <Link variant="dark" href="/contrast">
            Contrast
          </Link>
        </li>
        <li>
          <Link variant="dark" href="/palette">
            Palette
          </Link>
        </li>
        <li>
          <Link variant="dark" href="/demo">
            Demo
          </Link>
        </li>
      </ul>
      {session && session.user ? (
        <ul className="flex justify-center space-x-4">
          <li>
            <Link variant="dark" href="/api/auth/signout">
              Sign Out
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="flex justify-center space-x-4">
          <li>
            <Link variant="dark" href="/signup">
              Sign Up
            </Link>
          </li>
          <li>
            <Link variant="dark" href="/signin">
              Log In
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
