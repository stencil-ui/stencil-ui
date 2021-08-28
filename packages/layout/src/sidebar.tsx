import React, { forwardRef } from 'react'
import { Box } from '@theme-ui/components'

export interface SidebarProps {
  sidebar: React.ReactNode
  content: React.ReactNode
  sidebarWidth: string | number
  stretch?: boolean
  space?: string | number
  side: 'left' | 'right'
  [key: string]: unknown
}

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      sidebar,
      sidebarWidth,
      stretch = true,
      content,
      side = 'left',
      space = '0px',
      ...props
    },
    ref
  ) => {
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
        css={{
          overflow: 'hidden',
        }}
      >
        <Box
          css={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: !stretch ? 'flex-start' : undefined,
            margin: `calc(${space} / 2 * -1)`,
          }}
        >
          <Box css={isSidebarLeft ? sidebarStyle : contentStyle}>
            {isSidebarLeft ? sidebar : content}
          </Box>
          <Box css={isSidebarLeft ? contentStyle : sidebarStyle}>
            {isSidebarLeft ? content : sidebar}
          </Box>
        </Box>
      </Box>
    )
  }
)

Sidebar.displayName = 'Sidebar'
