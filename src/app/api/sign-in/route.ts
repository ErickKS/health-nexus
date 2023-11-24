import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) throw new Error("Problemas no POST");

  const formData = new URLSearchParams();
  formData.append("email", encodeURIComponent(email));
  formData.append("senha", encodeURIComponent(password));

  const response = await fetch("http://localhost:8080/ProjetoHealthNexus/rest/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData,
  });

  if (!response.ok) throw new Error("Problemas no fetch");

  const data = await response.json();

  return NextResponse.json({ data });
}
