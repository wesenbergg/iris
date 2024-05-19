import React, { ReactNode } from "react";
import clsx from "clsx";

type TextProps = {
  tag?: "p" | "span" | "small" | "code" | "label";
  className?: string;
  children: ReactNode;
};

const Text = ({ tag = "p", className, children }: TextProps) => {
  const Tag = tag;

  return (
    <Tag
      className={clsx(`${className}`, {
        "text-base": tag === "span",
        "text-base mb-2": tag === "p",
        "text-sm": tag === "small",
        "text-mono": tag === "code",
      })}
    >
      {children}
    </Tag>
  );
};

export default Text;
