/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Flex } from './Flex'
import { withTheme } from './with-theme'

export default { title: 'Flex', decorators: [withTheme()] }

export const withDefault = () => <Flex>content</Flex>

export const withJustifyCenter = () => <Flex justify="center">content</Flex>
