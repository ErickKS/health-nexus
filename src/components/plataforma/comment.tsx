interface CommentsProps {
  name: string;
  content: string;
}

export function Comment({ name, content }: CommentsProps) {
  return (
    <div className="flex flex-col gap-1 p-4 bg-blue-light rounded-lg">
      <div className="flex gap-2 items-center">
        <div className="h-[6px] w-[6px] bg-primary rounded-full shadow-main" />
        <span className="text-sm font-medium">{name}</span>
      </div>

      <p className="leading-relaxed">{content}</p>
    </div>
  );
}
