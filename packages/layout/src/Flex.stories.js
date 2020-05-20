/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Flex } from './Flex'

export default { title: 'Flex' }

export const withDefault = () => <Flex>content</Flex>

export const withJustifyCenter = () => <Flex justify="center">content</Flex>
