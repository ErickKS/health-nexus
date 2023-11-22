import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface CardInsightProps {
  id?: string;
  title: string;
  author: string;
  image: string;
  size?: "sm" | "lg";
  additionalClass?: string;
}

export function CardInsight({ id, title, author, image, size = "lg", additionalClass }: CardInsightProps) {
  return (
    <Link
      href={id ? `/plataforma/insights/${id}` : ""}
      className={clsx(
        "relative flex flex-col justify-end p-6 w-full transition-all hover:scale-[1.01]",
        "text-white",
        { "h-[240px] rounded-lg": size === "sm" },
        { "h-[280px] rounded-xl": size === "lg" },
        additionalClass
      )}
    >
      <div className="absolute z-10 inset-0 bg-black/50 rounded-xl" />
      <Image src={image} alt="imagem de destaque do post" fill priority className="absolute inset-0 w-full object-cover rounded-xl" />

      <div className="relative z-20 space-y-2 text-left">
        <h3 className="leading-tight">{title}</h3>
        <span className="text-lg">{author}</span>
      </div>
    </Link>
  );
}
