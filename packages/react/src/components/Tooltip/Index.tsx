import { ComponentProps } from "react";
import { format } from "date-fns"
import { ptBR } from 'date-fns/locale'
import { TooltipArrow, TooltipContainer, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from "./style";


export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  date: Date
  status: string
}

export function Tooltip({ date, status }: TooltipProps) {

  return (
    <TooltipProvider >
      <TooltipContainer>
        <TooltipTrigger>

        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={5}>
            {`${format(date, "dd 'de' MMMM", { locale: ptBR })} - ${status}`}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipContainer>

    </TooltipProvider>
  )

}