/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import { Overlay } from './Overlay'
import { BorderBox, Paragraphs } from './utils'

export default { title: 'Overlay' }

const Content = ({ children }) => (
  <Box sx={{ bg: 'green', height: '400px', position: 'relative' }}>
    {children}
    <Paragraphs />
  </Box>
)

const defaultProps = {
  children: (
    <BorderBox sx={{ bg: 'white' }}>
      <Paragraphs />
    </BorderBox>
  ),
}

export const withDefault = () => (
  <Content>
    <Overlay {...defaultProps} />
  </Content>
)

export const withBreakout = () => (
  <Content>
    <Overlay {...defaultProps} breakout={true} />
  </Content>
)

export const withFixed = () => (
  <Content>
    <Overlay {...defaultProps} fixed={true} />
  </Content>
)
