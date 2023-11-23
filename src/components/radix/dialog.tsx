"use client";

import { ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface DialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  children: ReactNode;
}

interface DialogWithActionProps extends DialogProps {
  triggerText: string;
  onClick?: () => void;
}

export function DialogWithAction({ open, setOpen, title, triggerText, onClick, children }: DialogWithActionProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />

        <DialogPrimitive.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[498px] p-4 outline-none">
          <div className="flex flex-col gap-6 p-6 rounded-xl bg-white text-gray">
            <h3>{title}</h3>

            <main className="flex flex-col gap-4">{children}</main>

            <footer className="flex gap-2">
              <button onClick={onClick} className="h-10 w-fit px-4 bg-primary rounded-lg text-white font-medium">
                {triggerText}
              </button>

              <DialogPrimitive.Close className="h-10 w-fit px-4 rounded-lg bg-transparent text-gray font-medium transition-all">
                Cancelar
              </DialogPrimitive.Close>
            </footer>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export function DialogWithoutAction({ open, setOpen, title, children }: DialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm" />

        <DialogPrimitive.Content className="fixed z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[336px] p-4 outline-none">
          <div className="relative flex flex-col items-center gap-6 p-6 rounded-xl bg-white text-gray overflow-hidden">
            <h3>{title}</h3>

            <main>{children}</main>

            <footer className="flex gap-2">
              <DialogPrimitive.Close className="h-10 w-fit px-4 rounded-lg bg-primary text-white font-medium transition-all">
                Voltar
              </DialogPrimitive.Close>
            </footer>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
