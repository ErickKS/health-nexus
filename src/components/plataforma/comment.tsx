interface CommentsProps {
  name: string;
  content: string;
}

export function Comment({ name, content }: CommentsProps) {
  return (
    <div className="flex flex-col gap-1 p-4 bg-[#ECF2FF] rounded-lg">
      <div className="flex gap-2 items-center">
        <div className="h-[6px] w-[6px] bg-[#123359] rounded-full shadow-main" />
        <span className="text-sm font-medium">{name}</span>
      </div>

      <p className="leading-relaxed">{content}</p>
    </div>
  );
}
