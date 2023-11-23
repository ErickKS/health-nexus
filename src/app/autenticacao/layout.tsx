import Image from "next/image";

export default function AutenticacaoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white xs:bg-blue-light">
      <div className="flex flex-col justify-center items-center max-w-sm w-full p-4 rounded-xl bg-white xs:shadow-main xs:p-8">
        <Image src={"/img/logo/nexus-single.svg"} alt="Logo da Health Nexus" height={56} width={54.96} priority />

        <main className="flex flex-col justify-center gap-6 mt-4 text-center w-full">{children}</main>
      </div>
    </div>
  );
}
