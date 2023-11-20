"use client";

import { ReactNode, useState } from "react";

import { DialogWithAction } from "../radix/dialog";

interface CreateQuestionProps {
  triggerStyle: string;
  children: ReactNode;
}

export function CreateQuestion({ triggerStyle, children }: CreateQuestionProps) {
  const [openDialog, setOpenDialog] = useState(false);

  function createQuestion() {}

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
        <div className="flex flex-col gap-1 text-[#2E2E2E]">
          <label className="font-medium">Conteúdo da pergunta</label>

          <textarea
            id="question"
            name="question"
            placeholder="Ex: Benefícios da batata"
            className="h-48 p-4 border border-[#E5EAEF] rounded-lg outline-none resize-none transition-all focus:border-[#123359]"
          />
        </div>
      </DialogWithAction>
    </>
  );
}
