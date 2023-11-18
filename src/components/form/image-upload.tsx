import clsx from "clsx";
import Image from "next/image";

export function ImageUpload() {
  return (
    <div>
      <label
        htmlFor="img"
        tabIndex={0}
        className={clsx(
          "flex flex-col justify-center items-center gap-1 h-40 p-4 border border-[#E5EAEF] rounded-lg outline-none cursor-pointer transition-all",
          "text-[#2E2E2E]",
          "hover:border-[#123359] focus:border-[#123359]"
        )}
      >
        <Image src={"/img/plataforma/img-upload.svg"} alt="" height={32} width={32} />

        <span>Clique aqui para selecionar sua imagem</span>

        <input
          type="file"
          id="img"
          name="img"
          accept="image/*"
          placeholder="Ex: Benefícios da batata"
          className="invisible absolute inset-0 -z-10 opacity-0"
        />
      </label>
    </div>
  );
}
