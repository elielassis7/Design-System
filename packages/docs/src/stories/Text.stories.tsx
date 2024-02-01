import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@call-ignite-ui/react'


export default {
  title: 'typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Example text',
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio'
      }
    },
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {

}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong'
  }
}