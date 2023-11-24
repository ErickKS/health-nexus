import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const user = await request.json();

  console.log(user);

  const response = await fetch("http://localhost:8080/ProjetoHealthNexus/rest/registro/especialista", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: user,
  });

  if (!response.ok) throw new Error("Problemas no fetch");

  return NextResponse.json({ response: response.ok });
}
