"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import clsx from "clsx";
import { X } from "lucide-react";

interface Insight {
  title: string;
  content: string;
  image: File | null;
  imagePreviewURL: string | null;
}
interface InsightAlert {
  title: boolean;
  content: boolean;
  image: boolean;
}

export function CreateInsight() {
  const [insightData, setInsightData] = useState<Insight>({
    title: "",
    content: "",
    image: null,
    imagePreviewURL: null,
  });

  const [insightDataAlert, setInsightDataAlert] = useState<InsightAlert>({
    title: false,
    content: false,
    image: false,
  });

  function handleFormChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { value, name } = event.target;

    if (name === "title") {
      setInsightDataAlert((prevInsight) => ({
        ...prevInsight,
        title: false,
      }));
      setInsightData((prevInsight) => ({
        ...prevInsight,
        title: value,
      }));
    }

    if (name === "content") {
      setInsightDataAlert((prevInsight) => ({
        ...prevInsight,
        content: false,
      }));
      setInsightData((prevInsight) => ({
        ...prevInsight,
        content: value,
      }));
    }
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;

    if (!files) return;

    const file = files[0];

    if (!file) return;

    setInsightDataAlert((prevInsight) => ({
      ...prevInsight,
      image: false,
    }));
    setInsightData((prevInsight) => ({
      ...prevInsight,
      image: file,
      imagePreviewURL: URL.createObjectURL(file),
    }));
  }

  function removeImage() {
    setInsightData((prevInsight) => ({
      ...prevInsight,
      image: null,
      imagePreviewURL: null,
    }));
  }

  function createInsight(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const areFieldsEmpty = Object.values(insightData).some((value) => !value);

    if (areFieldsEmpty) {
      setInsightDataAlert((prevInsightAlert) => {
        for (const key in prevInsightAlert) {
          if (prevInsightAlert.hasOwnProperty(key)) {
            prevInsightAlert[key as keyof InsightAlert] = !insightData[key as keyof InsightAlert];
          }
        }
        return { ...prevInsightAlert };
      });

      return;
    }

    const newInsight: Insight = {
      title: insightData.title,
      content: insightData.content,
      image: insightData.image,
      imagePreviewURL: insightData.imagePreviewURL,
    };

    alert("criado com sucesso");

    setInsightData({
      title: "",
      content: "",
      image: null,
      imagePreviewURL: null,
    });
  }

  return (
    <form onSubmit={createInsight} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 text-gray">
        <label htmlFor="title" className="font-medium">
          Título do insight
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={insightData.title}
          onChange={handleFormChange}
          placeholder="Ex: Benefícios da batata"
          className={clsx(
            "h-11 px-4 border border-blue-extra-light rounded-lg outline-none transition-all focus:border-primary",
            { "border-red": insightDataAlert.title },
            { "border-blue-extra-light": !insightDataAlert.title }
          )}
        />
      </div>

      <div className="flex flex-col gap-1 text-gray">
        <label htmlFor="title" className="font-medium">
          Conteúdo do insight
        </label>
        <textarea
          id="content"
          name="content"
          value={insightData.content}
          onChange={handleFormChange}
          placeholder="Ex: Benefícios da batata"
          className={clsx(
            "h-48 p-4 border border-blue-extra-light rounded-lg outline-none resize-none transition-all focus:border-primary",
            { "border-red": insightDataAlert.content },
            { "border-blue-extra-light": !insightDataAlert.content }
          )}
        />
      </div>

      <div className="relative flex flex-col gap-1 text-gray">
        <span className="font-medium">Imagem de destaque</span>

        <label
          htmlFor="image"
          tabIndex={0}
          className={clsx(
            "relative flex flex-col justify-center items-center gap-1 h-40 p-4 border border-blue-extra-light rounded-lg outline-none cursor-pointer transition-all",
            "text-gray",
            "hover:border-primary focus:border-primary",
            { "border-red": insightDataAlert.image },
            { "border-blue-extra-light": !insightDataAlert.image }
          )}
        >
          {insightData.imagePreviewURL ? (
            <Image src={insightData.imagePreviewURL} alt="" fill className="object-cover rounded-lg" />
          ) : (
            <>
              <Image src={"/img/plataforma/img-upload.svg"} alt="" height={32} width={32} />

              <span className="text-center">Clique aqui para selecionar sua imagem</span>
            </>
          )}

          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            placeholder="Ex: Benefícios da batata"
            className="absolute inset-0 -z-10 invisible opacity-0"
          />
        </label>

        {insightData.imagePreviewURL && (
          <button
            onClick={removeImage}
            className="absolute top-9 right-2 z-10 flex justify-center items-center h-8 w-8 bg-white rounded-full"
          >
            <X size={20} />
          </button>
        )}
      </div>

      <button type="submit" className="h-10 w-fit mt-4 px-4 bg-primary rounded-lg text-white font-medium">
        Postar comentário
      </button>
    </form>
  );
}
