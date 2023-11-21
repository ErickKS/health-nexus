import Image from "next/image";

export function Partnership() {
  return (
    <section id="partnership" className="container flex flex-col justify-center items-center gap-6">
      <h3>Nossos parceiros</h3>

      <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-5 max-w-[344px] w-full">
        <Image src={"/img/logo/logo-hapvida.png"} alt="logo da Hapvida" height={32} width={137.33} priority />
        <Image src={"/img/logo/logo-notredame.png"} alt="logo da NotreDame Intermédica" height={40} width={136.59} priority />
        <Image src={"/img/logo/logo-fiap.svg"} alt="logo da Fiap" height={32} width={118.81} priority />
      </div>
    </section>
  );
}