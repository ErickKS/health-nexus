import * as ToastPrimitive from "@radix-ui/react-toast";
import { AlertOctagon } from "lucide-react";

interface ToastProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  alert: string;
}

export function Toast({ open, onOpenChange, alert }: ToastProps) {
  return (
    <ToastPrimitive.Provider swipeDirection="up" duration={4000}>
      <ToastPrimitive.Root
        open={open}
        onOpenChange={onOpenChange}
        className="px-4 outline-none data-[state=closed]:animate-hide data-[state=open]:animate-slideIn"
      >
        <div className="grid grid-cols-[24px_1fr] items-center gap-2 px-4 py-3 rounded-xl bg-red/30">
          <AlertOctagon className="stroke-red" />

          <ToastPrimitive.Description asChild>
            <p className="text-sm font-semibold text-red text-left">{alert}</p>
          </ToastPrimitive.Description>
        </div>
      </ToastPrimitive.Root>

      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  );
}
