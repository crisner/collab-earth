import { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
  className?: string
};

const Grid = (props: GridProps) => {
  return <div className={`grid grid-cols-12 gap-4${props.className ? ` ${props.className}` : ''}`}>{props.children}</div>;
};

export default Grid;
