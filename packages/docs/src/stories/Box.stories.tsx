import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'


export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando</Text>
      </>
    )
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {

}

