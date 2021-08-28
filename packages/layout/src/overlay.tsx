import React, { forwardRef } from 'react'
import { useThemeUI } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import { normaliseSpace } from './utils'

export interface OverlayProps {
  breakout?: boolean
  space?: string | number
  fixed?: boolean
  children: React.ReactNode
  [key: string]: unknown
}

export const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
  (
    { breakout = false, space = '0px', fixed = false, children, ...props },
    ref
  ) => {
    const { theme } = useThemeUI()
    const adjustedSpace = space ? normaliseSpace(theme)(space) : '0px'

    return (
      <Box
        ref={ref}
        {...props}
        css={{
          position: fixed ? 'fixed' : 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          ...(breakout
            ? {}
            : {
                maxWidth: `calc(100% - (${adjustedSpace} * 2))`,
                maxHeight: `calc(100% - (${adjustedSpace} * 2))`,
                overflow: 'auto',
              }),
        }}
      >
        {children}
      </Box>
    )
  }
)

Overlay.displayName = 'Overlay'
