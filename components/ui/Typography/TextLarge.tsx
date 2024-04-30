import { ReactNode } from "react";

type TextLargeProps = {
  children: ReactNode;
};

export function TextLarge(props: TextLargeProps) {
  return <p className="text-lg font-semibold">{props.children}</p>;
}
