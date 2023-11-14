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
      className={clsx(
        "absolute flex justify-center items-center bg-white h-10 w-10 rounded-full",
        x,
        y
        // "top-[" + y + "px]",
        // "left-[" + x + "px]"
      )}
    >
      <Icon />
    </div>
  );
}
