import Link, { LinkProps } from "next/link";
import clsx from "clsx";

interface ButtonProps extends LinkProps {
  variant?: "primary" | "secondary" | "extra";
  size: "lg" | "sm";
  children: React.ReactNode;
}

export function Button({ variant = "primary", size, children, ...props }: ButtonProps) {
  return (
    <Link
      className={clsx(
        "flex justify-center items-center h-10 rounded-full",
        { "h-10": size === "lg" },
        { "h-9": size === "sm" },
        { "bg-primary text-white px-6 font-medium": variant === "primary" },
        { "bg-white text-gray px-6 font-medium shadow-main": variant === "secondary" },
        { "bg-white text-gray px-2 font-semibold": variant === "extra" }
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
