import Image from "next/image";

interface CardInsightProps {
  title: string;
  author: string;
  image: string;
}

export function CardInsight({ title, author, image }: CardInsightProps) {
  return (
    <button className="relative flex flex-col justify-end p-6 h-[280px] rounded-xl text-white">
      <div className="absolute z-10 inset-0 bg-black/50 rounded-xl" />
      <Image src={image} alt="imagens de destaque do post" fill className="absolute inset-0 w-full object-cover rounded-xl" />

      <div className="relative z-20 space-y-2 text-left">
        <h3>{title}</h3>
        <span className="text-lg">{author}</span>
      </div>
    </button>
  );
}
