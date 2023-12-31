"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState, useEffect } from "react";
import axios from "axios";
import { Mail, LockKeyhole } from "lucide-react";

import { useValidate } from "@/hooks/useValidate";
import { Login } from "@/types/auth";
import { emptyLogin } from "@/constants/auth";

import { Input } from "@/components/form/input";
import { Toast } from "@/components/radix/toast";

export default function Login() {
  const router = useRouter();
  const [toastActive, setToastActive] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("name") && localStorage.getItem("account")) router.push("/plataforma");
  }, []);

  const login = useValidate<Login>({
    initialValues: emptyLogin,
    validate: (values) => {
      const errors: { [key: string]: string } = { email: "", password: "" };

      if (!values.email) {
        errors.email = "Campo obrigatório";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Por favor, insira um email válido";
      }

      if (!values.password) {
        errors.password = "Campo obrigatório";
      }

      return errors;
    },
  });

  function handleToast() {
    setToastActive(false);
    setTimeout(() => setToastActive(true), 100);
  }

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const isValidLogin = Object.values(login.errors).every((error) => !error);

    if (!isValidLogin) {
      login.handleSubmit();
      return;
    }

    const { email, password } = login.values;

    try {
      const data = await axios.post("http://localhost:3000/api/sign-in", { email, password });

      const user = data.data.data; // I know, I know

      if (user.length === 0) {
        handleToast();
        return;
      }

      console.log(console.log(user));

      localStorage.setItem("name", user[0].nome);
      localStorage.setItem("account", user[0].tipoConta);

      router.push("/plataforma");
    } catch (error) {
      console.error("Erro ao fazer login");
    }
  }

  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <h2>Bem-vindo</h2>
        <span className="text-lg">Faça seu login na plataforma</span>
      </div>

      <form onSubmit={signIn} className="flex flex-col gap-4">
        <Input
          type="email"
          id="email"
          value={login.values.email}
          onChange={login.handleChange}
          iconStart={<Mail />}
          placeholder="Seu E-mail"
          error={login.touched.email && login.errors.email}
        />
        <Input
          type="password"
          id="password"
          value={login.values.password}
          onChange={login.handleChange}
          iconStart={<LockKeyhole />}
          placeholder="Sua Senha"
          error={login.touched.password && login.errors.password}
        />

        <button type="submit" className="h-12 bg-primary rounded-lg text-white font-medium mt-1">
          Entrar
        </button>
      </form>

      <span>
        Ainda não tem uma conta?{" "}
        <Link href={"/autenticacao/registro"} className="text-primary font-semibold hover:underline">
          Registre-se
        </Link>
      </span>

      <div className="fixed top-4 right-1/2 translate-x-1/2 max-w-[384px] w-full">
        <Toast
          open={toastActive}
          onOpenChange={() => setToastActive(!toastActive)}
          alert={"E-mail ou senha incorretos. Por favor, verifique e tente novamente."}
        />
      </div>
    </>
  );
}
