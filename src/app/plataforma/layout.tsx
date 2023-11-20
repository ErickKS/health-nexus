import { Nav } from "@/components/plataforma/nav";

export default function PlataformaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen pt-[104px] lg:pl-[301px] p-4 bg-white">
      <Nav />

      <main className="flex flex-col gap-8 max-w-[1152px] w-full mx-auto pb-4">{children}</main>
    </div>
  );
}
