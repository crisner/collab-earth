import { ReactNode } from "react";

type TextMutedProps = {
  children: ReactNode;
  className?: String;
};

export function TextMuted(props: TextMutedProps) {
  return <p className={`text-sm text-muted-foreground${props.className ? ` ${props.className}` : ''}`}>{props.children}</p>;
}
