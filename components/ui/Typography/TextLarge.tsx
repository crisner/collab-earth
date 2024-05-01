import { ReactNode } from "react";

type TextLargeProps = {
  children: ReactNode;
  className?: String;
};

export function TextLarge(props: TextLargeProps) {
  return <p className={`text-lg font-semibold${props.className ? ` ${props.className}` : ''}`}>{props.children}</p>;
}
