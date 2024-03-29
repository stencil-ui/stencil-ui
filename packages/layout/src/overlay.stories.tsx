import React from 'react'
import { Box } from '@theme-ui/components'
import { Overlay } from './overlay'
import { withTheme, BorderBox, Paragraphs } from 'storybook'

export default { title: 'Overlay', decorators: [withTheme()] }

const Content = ({ children }: { children: React.ReactNode }) => (
  <Box sx={{ bg: '#ccc', height: '400px', position: 'relative' }}>
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
