import { ElementType, ReactNode } from "react";

interface AboutCardProps {
  icon: ElementType;
  title: string;
  children: ReactNode;
}

export function AboutCard({ icon: Icon, title, children }: AboutCardProps) {
  return (
    <div className="flex flex-col gap-4 p-8 bg-blue-light rounded-xl shadow-main transition-all hover:scale-[1.01]">
      <div>
        <Icon size={32} strokeWidth={1.5} />
      </div>

      <h4>{title}</h4>

      <p className="leading-relaxed">{children}</p>
    </div>
  );
}
