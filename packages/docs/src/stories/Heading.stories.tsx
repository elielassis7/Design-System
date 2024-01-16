import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'


export default {
  title: 'typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio'
      }
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {

}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    size: 'md',
    children: 'H1 heading',
    as: 'h1'
  },

  parameters: {
    docs: {
      description: {
        story: 'Por padrão o heanding sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.'
      }
    }
  }
}
