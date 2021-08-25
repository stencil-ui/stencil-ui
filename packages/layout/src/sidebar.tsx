import React from 'react'
import { Box } from '@theme-ui/components'

export interface SidebarProps {
  sidebar: React.ReactNode
  content: React.ReactNode
  sidebarWidth: string | number
  stretch?: boolean
  space?: string | number
  side: 'left' | 'right'
  [x: string]: unknown
}

export const Sidebar = React.forwardRef(
  (
    {
      sidebar,
      sidebarWidth,
      stretch,
      content,
      side,
      space,
      ...props
    }: SidebarProps,
    ref?: React.Ref<HTMLDivElement>
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

Sidebar.defaultProps = {
  side: 'left',
  sidebarWidth: null,
  stretch: true,
  space: '0px',
}
