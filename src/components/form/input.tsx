import { ComponentProps, ElementType, useState, FocusEvent, JSX } from "react";
import clsx from "clsx";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends ComponentProps<"input"> {
  type: string;
  id: string;
  value: string;
  iconStart?: JSX.Element;
  error?: boolean | string;
}

export function Input({ type: Type, id, value, iconStart, error, ...props }: InputProps) {
  const [type, setType] = useState(Type);

  function changeInputType() {
    setType(type === "text" ? "password" : "text");
  }

  function valueVerification(event: FocusEvent<HTMLInputElement>) {
    const inputValue = event.target.value;

    if (!inputValue) value = "";
  }

  return (
    <div className="flex flex-col gap-1 items-start">
      <label
        htmlFor={id}
        className={clsx(
          "flex items-center gap-4 h-12 w-full px-4 border rounded-lg select-none shadow-main transition-all",
          "text-[#2E2E2E]",
          "focus-within:border-[#123359]",
          { "border-red-600": error },
          { "border-[#E5EAEF]": !error }
        )}
      >
        {iconStart}

        <input
          type={type}
          id={id}
          name={id}
          onBlur={valueVerification}
          className="bg-transparent outline-none h-full w-full font-medium placeholder:text-[#2E2E2E]"
          {...props}
        />

        {id === "password" &&
          (type === "password" ? (
            <Eye size={24} onClick={changeInputType} className="cursor-pointer" />
          ) : (
            <EyeOff size={24} onClick={changeInputType} className="cursor-pointer" />
          ))}

        {id === "passwordConfirm" &&
          (type === "password" ? (
            <Eye size={24} onClick={changeInputType} className="cursor-pointer" />
          ) : (
            <EyeOff size={24} onClick={changeInputType} className="cursor-pointer" />
          ))}
      </label>

      {error && <span className="text-sm text-red-600 font-semibold">{error}</span>}
    </div>
  );
}
