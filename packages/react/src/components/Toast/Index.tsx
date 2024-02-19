import { ToastProvider } from "@radix-ui/react-toast";
import { useState, useRef, useEffect, ComponentProps } from "react";
import { Button } from "../Button";
import { ToastAction, ToastDescription, ToastRoot, ToastTitle, ToastViewport } from "./style";´

interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string;
  description: string

}


export function Toast({ title, description }: ToastProps) {

  const [open, setOpen] = useState(false);




  return (
    <ToastProvider swipeDirection="right">
      <Button

        variant={'primary'}
        size={'md'}
        onClick={() => {
          setOpen(false);

          setTimeout(() => {

            setOpen(true);
          }, 100);
        }}
      >
        Save
      </Button>

      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastAction asChild altText="Undo">
          <Button variant={"secondary"} size={"sm"}>Undo</Button>
        </ToastAction>
      </ToastRoot>

      <ToastViewport />
    </ToastProvider>
  )
}