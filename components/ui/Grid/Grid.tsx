import { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
};

const Grid = (props: GridProps) => {
  return <div className="grid grid-cols-12 gap-4">{props.children}</div>;
};

export default Grid;
