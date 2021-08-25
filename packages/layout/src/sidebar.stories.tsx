import React from 'react'
import { Box, Text } from '@theme-ui/components'
import { withTheme } from 'storybook'
import { Sidebar } from './sidebar'
import { textReact, paragraphs } from '@utilz/dummy'

export default {
  title: 'Sidebar',
  decorators: [withTheme()],
}

const Padded = ({
  title,
  children,
  color,
}: {
  title: string
  children: React.ReactNode
  color: string
}) => (
  <Box sx={{ p: 3, backgroundColor: color, height: '100%' }}>
    <h1>{title}</h1>
    {children}
  </Box>
)

const defaultProps = {
  sidebarWidth: '20rem',
  sidebar: (
    <Padded title="Sidebar" color="#eee">
      {textReact(paragraphs(20, 50)).map((props) => (
        <Text {...props} />
      ))}
    </Padded>
  ),
  content: (
    <Padded title="Main" color="#e0e0e0">
      {textReact(paragraphs(100, 150)).map((props) => (
        <Text {...props} />
      ))}
    </Padded>
  ),
}

export const withLeftSidebar = () => <Sidebar {...defaultProps} />

export const withRightSidebar = () => <Sidebar {...defaultProps} side="right" />

export const withSpace = () => <Sidebar {...defaultProps} space="70px" />
