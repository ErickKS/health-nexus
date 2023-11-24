import Image from "next/image";
import { ReactNode } from "react";

interface BannerProps {
  image: string;
  height: number;
  width: number;
  children: ReactNode;
}

export function Banner({ image, height, width, children }: BannerProps) {
  return (
    <div className="relative flex justify-center items-center h-[200px] px-6 bg-blue-light rounded-xl overflow-hidden sm:justify-between">
      <div className="flex flex-col justify-center items-center gap-2 text-center sm:items-start">{children}</div>

      <Image src={`/img/plataforma/${image}.png`} alt="" height={height} width={width} priority className="max-sm:hidden" />

      <Image src={"/img/plataforma/circle-1.svg"} alt="" height={228} width={228} className="absolute -left-24" />
      <Image src={"/img/plataforma/circle-2.svg"} alt="" height={130} width={130} className="absolute right-0 -top-8" />
    </div>
  );
}
