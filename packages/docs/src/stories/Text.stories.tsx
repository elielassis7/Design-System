import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'


export default {
  title: 'typography/Text',
  component: Text,
  args: {
    children: 'Example text',
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