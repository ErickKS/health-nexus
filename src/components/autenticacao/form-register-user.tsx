"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import axios from "axios";

import { useValidate } from "@/hooks/useValidate";
import { RegisterUser } from "@/types/auth";
import { RegisterUserFields, emptyRegisterUser } from "@/constants/auth";

import { Input } from "@/components/form/input";

export function FormRegisterUser() {
  const router = useRouter();

  const registerUser = useValidate<RegisterUser>({
    initialValues: emptyRegisterUser,
    validate: (values) => {
      const errors: { [key: string]: string } = {
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      };

      if (!values.name) {
        errors.name = "Campo obrigatório";
      } else if (!/^[A-Za-zÀ-ú'-]+( [A-Za-zÀ-ú'-]+ ?)+$/i.test(values.name)) {
        errors.name = "Por favor, insira um nome válido";
      }

      if (!values.email) {
        errors.email = "Campo obrigatório";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Por favor, insira um email válido";
      }

      if (!values.password) {
        errors.password = "Campo obrigatório";
      }

      if (!values.passwordConfirm) {
        errors.passwordConfirm = "Campo obrigatório";
      } else if (values.passwordConfirm !== values.password) {
        errors.passwordConfirm = "As senhas fornecidas não coincidem.";
      }

      return errors;
    },
  });

  const isValidUser = Object.values(registerUser.errors).every((error) => !error);

  async function signUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValidUser) {
      registerUser.handleSubmit();
      return;
    }

    const { name, email, password } = registerUser.values;

    const registerData = {
      name,
      email,
      password,
      tipo: "U",
    };

    try {
      // await axios.post("http://localhost:3000/api/sign-up", registerData);

      localStorage.setItem("name", name);
      localStorage.setItem("account", "U");

      router.push("/plataforma");
    } catch (error) {
      console.error("Erro ao fazer o cadastro");
    }
  }

  return (
    <form onSubmit={signUp} className="flex flex-col gap-4">
      {RegisterUserFields.map((input) => {
        const field = input.id as keyof RegisterUser;

        return (
          registerUser.values[field] !== undefined && (
            <Input
              type={input.type}
              id={input.id}
              key={input.id}
              placeholder={input.placeholder}
              iconStart={input.icon}
              value={registerUser.values[field]}
              onChange={registerUser.handleChange}
              error={registerUser.touched[field] && registerUser.errors[field]}
            />
          )
        );
      })}

      <button type="submit" className="h-12 bg-primary rounded-lg text-white font-medium mt-1">
        Cadastrar
      </button>
    </form>
  );
}
