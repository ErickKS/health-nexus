import { ElementType } from "react";
import clsx from "clsx";

interface BallonProps {
  x?: string;
  y?: string;
  icon: ElementType;
}

export function Ballon({ x, y, icon: Icon }: BallonProps) {
  return (
    <div
      className={clsx("absolute hidden justify-center items-center bg-blue-light h-10 w-10 rounded-full animate-levitation sm:flex", x, y)}
    >
      <Icon />
    </div>
  );
}
