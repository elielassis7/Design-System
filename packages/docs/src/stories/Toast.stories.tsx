import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@call-ignite-ui/react'


export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {

  },
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'save',
    description: 'new task saved'
  }
}

export const Error: StoryObj<ToastProps> = {
  args: {
    title: 'Error',
    description: 'try again later'
  }
}


