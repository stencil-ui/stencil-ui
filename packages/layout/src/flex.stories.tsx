import { Flex } from './flex'
import { withTheme, BorderBox } from 'storybook'

export default { title: 'Flex', decorators: [withTheme()] }

export const withDefault = () => (
  <Flex>
    <BorderBox />
    <BorderBox />
  </Flex>
)

export const withJustifyCenter = () => (
  <Flex justify="center">
    <BorderBox />
  </Flex>
)

export const withColumnDirection = () => (
  <Flex direction="column">
    <BorderBox />
    <BorderBox />
  </Flex>
)
