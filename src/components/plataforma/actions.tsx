import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { PlusCircle } from "lucide-react";

import { CreateQuestion } from "./create-question";

export function Actions() {
  const [accountType, setAccountType] = useState<string | null>(null);

  useEffect(() => {
    setAccountType(localStorage.getItem("account"));
  }, []);

  return (
    <div className={clsx("grid gap-6 h-48", "xs:gap-8 xs:grid-cols-2 xs:h-20", "lg:grid-rows-2 lg:grid-cols-1 lg:h-full")}>
      {accountType === "E" && (
        <Link
          href={"/plataforma/insights/criar"}
          className={clsx(
            "flex flex-col justify-center items-center gap-1 h-full bg-blue-light border border-blue-extra-light rounded-xl outline-none transition-all",
            "text-gray font-medium",
            "hover:scale-[1.02] focus:scale-[1.02] hover:border-primary focus:border-primary"
          )}
        >
          <PlusCircle />
          Criar um insight
        </Link>
      )}

      <CreateQuestion
        className={clsx(
          "flex flex-col justify-center items-center gap-1 h-full bg-primary rounded-xl shadow-main transition-all",
          "text-white font-medium",
          "hover:scale-[1.02] focus:scale-[1.02]"
        )}
      >
        <PlusCircle />
        Fazer uma pegunta
      </CreateQuestion>
    </div>
  );
}
