import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
};

export function Text(props: TextProps) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{props.children}</p>;
}
