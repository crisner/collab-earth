"use client";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

type ButtonLinkProps = {
  children: ReactNode;
  link: string;
  size: "default" | "sm" | "lg" | "icon" | null | undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonLink = ({ children, link = "", ...props }: ButtonLinkProps) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(link)} {...props}>
      {children}
    </Button>
  );
};

export default ButtonLink;
