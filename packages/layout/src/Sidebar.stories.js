/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import { Sidebar } from './Sidebar'
import { textReact, paragraphs } from '@utilz/dummy'
import { withTheme } from './with-theme'

export default {
  title: 'Sidebar',
  decorators: [withTheme()],
}

const Padded = ({ title, children, color }) => (
  <Box sx={{ p: 3, backgroundColor: color, height: '100%' }}>
    <h1>{title}</h1>
    {children}
  </Box>
)

const defaultProps = {
  sidebarWidth: '20rem',
  sidebar: (
    <Padded title="Sidebar" color="#eee">
      {textReact(paragraphs(20, 50)).map(props => (
        <p {...props} />
      ))}
    </Padded>
  ),
  content: (
    <Padded title="Main" color="#e0e0e0">
      {textReact(paragraphs(100, 150)).map(props => (
        <p {...props} />
      ))}
    </Padded>
  ),
}

export const withLeftSidebar = () => <Sidebar {...defaultProps} />

export const withRightSidebar = () => <Sidebar {...defaultProps} side="right" />

export const withSpace = () => <Sidebar {...defaultProps} space="70px" />
