import { ComponentProps, ElementType, useState } from "react";
import clsx from "clsx";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends ComponentProps<"input"> {
  type: string;
  id: string;
  iconStart?: ElementType;
  alert: boolean;
}

export function Input({ type: Type, id, iconStart: IconStart, alert, ...props }: InputProps) {
  const [type, setType] = useState(Type);

  function changeInputType() {
    setType(type === "text" ? "password" : "text");
  }

  return (
    <label
      htmlFor={id}
      className={clsx(
        "flex items-center gap-4 h-12 w-full px-4 border rounded-lg select-none shadow-main transition-all",
        "text-[#2E2E2E]",
        "focus-within:border-[#123359]",
        { "border-red-600": alert },
        { "border-[#E5EAEF]": !alert }
      )}
    >
      {IconStart && <IconStart size={24} />}

      <input
        type={type}
        id={id}
        name={id}
        className="bg-transparent outline-none h-full w-full font-medium placeholder:text-[#2E2E2E]"
        {...props}
      />

      {id === "password" &&
        (type === "password" ? (
          <Eye size={24} onClick={changeInputType} className="cursor-pointer" />
        ) : (
          <EyeOff size={24} onClick={changeInputType} className="cursor-pointer" />
        ))}

      {id === "password-confirm" &&
        (type === "password" ? (
          <Eye size={24} onClick={changeInputType} className="cursor-pointer" />
        ) : (
          <EyeOff size={24} onClick={changeInputType} className="cursor-pointer" />
        ))}
    </label>
  );
}
