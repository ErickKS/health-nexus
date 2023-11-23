"use client";

import { ChangeEvent, ReactNode, useState } from "react";
import clsx from "clsx";

import { DialogWithAction } from "../radix/dialog";

interface CreateQuestionProps {
  triggerStyle: string;
  children: ReactNode;
}

export function CreateQuestion({ triggerStyle, children }: CreateQuestionProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const [question, setQuestion] = useState("");
  const [questionAlert, setQuestionAlert] = useState(false);

  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = event.target;

    setQuestionAlert(false);
    setQuestion(value);
  }

  function createQuestion() {
    if (!question) {
      setQuestionAlert(true);
      return;
    }

    setOpenDialog(!openDialog);
  }

  return (
    <>
      <button onClick={() => setOpenDialog(!openDialog)} className={triggerStyle}>
        {children}
      </button>

      <DialogWithAction
        open={openDialog}
        setOpen={setOpenDialog}
        onClick={createQuestion}
        title="Criar nova pergunta"
        triggerText="Postar pergunta"
      >
        <div className="flex flex-col gap-1 text-gray">
          <label className="font-medium">Conteúdo da pergunta</label>

          <textarea
            id="question"
            name="question"
            value={question}
            onChange={handleInputChange}
            placeholder="Ex: Benefícios da batata"
            className={clsx(
              "h-48 p-4 border rounded-lg outline-none resize-none transition-all focus:border-primary",
              { "border-red": questionAlert },
              { "border-[#E5EAEF]": !questionAlert }
            )}
          />
        </div>
      </DialogWithAction>
    </>
  );
}
