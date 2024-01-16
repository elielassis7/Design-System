import { Check } from "phosphor-react";
import { CheckboxContainer, CheckboxIndicator } from "./style";
import { ComponentProps } from "react";

export interface CheckboxProps extends ComponentProps<typeof CheckboxContainer> { }

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight='bold' />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'