import * as Radio from "@radix-ui/react-radio-group";
import clsx from "clsx";
import { Contact2, Stethoscope } from "lucide-react";

interface TabsProps {
  type: "user" | "specialist";
  onChange: (value: "user" | "specialist") => void;
}

export function Tabs({ type, onChange }: TabsProps) {
  return (
    <Radio.Root
      defaultValue="user"
      onValueChange={onChange}
      aria-label="Tipo de registro"
      className="relative flex gap-1 h-10 w-[300px] p-1 mt-8 rounded-full shadow-sm"
    >
      <Radio.Item
        id="user"
        value="user"
        aria-label="Cadastro para usuários"
        className="relative z-10 flex justify-center items-center gap-2 w-36 rounded-full data-[state=checked]:text-white"
      >
        <Contact2 size={20} />
        Usuário
      </Radio.Item>
      <Radio.Item
        id="specialist"
        value="specialist"
        aria-label="Cadastro para especialistas"
        className="relative z-10 flex justify-center items-center gap-2 w-36 rounded-full data-[state=checked]:text-white"
      >
        <Stethoscope size={20} />
        Especialista
      </Radio.Item>

      <div
        className={clsx(
          "absolute top-1 w-36 h-8 bg-[#103157] rounded-full transition-all",
          { "translate-x-0": type === "user" },
          { "translate-x-[148px]": type === "specialist" }
        )}
      />
    </Radio.Root>
  );
}
