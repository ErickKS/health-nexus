import Image from "next/image";

export default function AutenticacaoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 min-h-screen bg-white">
      <div className="bg-[#CBD3DE]"></div>

      <div className="flex flex-col justify-center items-center">
        <header className="flex justify-center items-center h-[100px] w-[100px] rounded-xl shadow-sm">
          <Image src={"/img/logo/nexus-single.svg"} alt="Logo da Health Nexus" height={56} width={54.96} priority />
        </header>

        <main className="mt-6">{children}</main>
      </div>
    </div>
  );
}
