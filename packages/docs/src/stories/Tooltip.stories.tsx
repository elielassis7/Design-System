import { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@call-ignite-ui/react'


export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    date: new Date()
  },
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    status: "Disponivel"
  }
}

export const NotAvailable: StoryObj<TooltipProps> = {
  args: {
    status: "Indisponivel"
  }
}


