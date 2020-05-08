/** @jsx jsx */
import React from 'react'
import { jsx, useThemeUI } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import { normaliseUnit } from './utils'

export const Overlay = React.forwardRef(
  ({ breakout, space, fixed, children, ...props }, ref) => {
    const { theme } = useThemeUI()
    const adjustedSpace = normaliseUnit(theme)(space)
    return (
      <Box
        ref={ref}
        {...props}
        __css={{
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

Overlay.defaultProps = {
  breakout: false,
  space: '0px',
  fixed: false,
}
