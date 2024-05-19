import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { cn } from "@/utils/cn";

type LinkProps = NextLinkProps & {
  variant?: "dark" | "light";
  children: React.ReactNode;
  className?: string;
};

const Link: React.FC<LinkProps> = ({
  variant,
  className,
  children,
  ...rest
}) => {
  return (
    <NextLink
      {...rest}
      className={cn(className, "hover:underline", {
        "text-white hover:text-yellow-100": variant === "dark",
        "text-blue-500 hover:text-blue-700": variant === "light",
      })}
    >
      {children}
    </NextLink>
  );
};

export default Link;
