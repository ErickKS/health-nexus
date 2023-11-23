"use client";

import Link from "next/link";
import { useState } from "react";

import { Tabs } from "@/components/form/tabs";
import { FormRegisterUser } from "@/components/autenticacao/form-register-user";
import { FormRegisterSpecialist } from "@/components/autenticacao/form-register-specialist";

export default function Registro() {
  const [type, setType] = useState<"user" | "specialist">("user");

  function handleTypeChange(event: "user" | "specialist") {
    setType(event);
  }

  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <h2>Crie sua conta</h2>
        <span className="text-lg">Junte-se a nossa comunidade</span>
      </div>

      <Tabs type={type} onChange={handleTypeChange} />

      {type === "user" && <FormRegisterUser />}
      {type === "specialist" && <FormRegisterSpecialist />}

      <span>
        Já possui uma conta?{" "}
        <Link href={"/autenticacao/login"} className="text-primary font-semibold hover:underline">
          Login
        </Link>
      </span>
    </>
  );
}
