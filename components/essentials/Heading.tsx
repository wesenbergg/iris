import React, { ReactNode } from "react";
import clsx from "clsx";

type TextProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: ReactNode;
};

const H = ({ tag, className, children }: TextProps) => {
  const Tag = tag;

  return (
    <Tag
      className={clsx(`${className}`, {
        "text-2xl font-bold": tag === "h1",
        "text-2xl": tag === "h2",
        "text-2xl font-thin": tag === "h3",
        "text-xl font-bold": tag === "h4",
        "text-xl": tag === "h5",
        "text-xl font-thin": tag === "h6",
      })}
    >
      {children}
    </Tag>
  );
};

export default H;
