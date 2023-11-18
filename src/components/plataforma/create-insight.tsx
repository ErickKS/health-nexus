"use client";

import { ImageUpload } from "@/components/form/image-upload";

export function CreateInsight() {
  function createInsight() {}

  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 text-[#2E2E2E]">
        <label htmlFor="title" className="font-medium">
          Título do insight
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Ex: Benefícios da batata"
          className="h-11 px-4 border border-[#E5EAEF] rounded-lg outline-none transition-all focus:border-[#123359]"
        />
      </div>

      <div className="flex flex-col gap-1 text-[#2E2E2E]">
        <label htmlFor="title" className="font-medium">
          Conteúdo do insight
        </label>
        <textarea
          id="content"
          name="content"
          placeholder="Ex: Benefícios da batata"
          className="h-48 p-4 border border-[#E5EAEF] rounded-lg outline-none resize-none transition-all focus:border-[#123359]"
        />
      </div>

      <div className="flex flex-col gap-1 text-[#2E2E2E]">
        <span className="font-medium">Imagem de destaque</span>

        <ImageUpload />
      </div>

      <button onClick={createInsight} className="h-10 w-fit mt-4 px-4 bg-[#123359] rounded-lg text-white font-medium">
        Postar comentário
      </button>
    </form>
  );
}
