"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface DialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  triggerText: string;
  onClick?: () => void;
  children: ReactNode;
}

export function Dialog({ open, setOpen, title, triggerText, onClick, children }: DialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm" />

        <DialogPrimitive.Content className="fixed z-30 left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 w-full max-w-[498px] p-4 outline-none">
          <div className="flex flex-col gap-6 p-6 rounded-xl bg-white text-black">
            <h3>{title}</h3>

            <main className="flex flex-col gap-4">{children}</main>

            <footer className="flex gap-2">
              <button onClick={onClick} className="h-10 w-fit px-4 bg-[#123359] rounded-lg text-white font-medium">
                {triggerText}
              </button>

              <DialogPrimitive.Close className="h-10 w-fit px-4 rounded-lg bg-transparent text-[#2E2E2E] font-medium transition-all">
                Cancelar
              </DialogPrimitive.Close>
            </footer>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
