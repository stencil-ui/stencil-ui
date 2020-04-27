/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { Box } from '@theme-ui/components'

export const Sidebar = React.forwardRef(
  ({ sidebar, sidebarWidth, stretch, content, side, space, ...props }, ref) => {
    const isSidebarLeft = side === 'left'

    const sidebarStyle = {
      flexGrow: 1,
      flexBasis: sidebarWidth,
      margin: `calc(${space} / 2)`,
    }

    const contentStyle = {
      flexBasis: 0,
      flexGrow: 999,
      margin: `calc(${space} / 2)`,
      minWidth: `calc(50% - ${space})`,
    }

    return (
      <Box
        ref={ref}
        {...props}
        __css={{
          overflow: 'hidden',
        }}
      >
        <Box
          __css={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: !stretch ? 'flex-start' : null,
            margin: `calc(${space} / 2 * -1)`,
          }}
        >
          <Box sx={isSidebarLeft ? sidebarStyle : contentStyle}>
            {isSidebarLeft ? sidebar : content}
          </Box>
          <Box sx={isSidebarLeft ? contentStyle : sidebarStyle}>
            {isSidebarLeft ? content : sidebar}
          </Box>
        </Box>
      </Box>
    )
  }
)

Sidebar.defaultProps = {
  side: 'left',
  sidebarWidth: null,
  stretch: true,
  space: 0,
}
