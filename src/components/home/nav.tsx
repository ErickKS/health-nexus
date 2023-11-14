"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import clsx from "clsx";

export function Nav() {
  const router = useRouter();

  function SignIn() {
    router.push("/login");
  }

  function SignUp() {
    router.push("/registro");
  }

  return (
    <nav className="container flex justify-between items-center h-[70px]">
      <Image src={"/logo.svg"} alt="logo" height={40} width={217.26} priority />

      <div className="flex gap-5">
        <button
          onClick={SignIn}
          className={clsx(
            "flex justify-center items-center h-9 rounded-full",
            "text-[#2E2E2E] font-medium"
          )}
        >
          Entrar
        </button>

        <button
          onClick={SignUp}
          className={clsx(
            "flex justify-center items-center h-9 px-6 bg-[#2E2E2E] rounded-full",
            "text-white font-medium"
          )}
        >
          Registrar
        </button>
      </div>
    </nav>
  );
}
