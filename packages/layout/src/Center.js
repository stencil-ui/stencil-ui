/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { useTheme } from '@themeprint/ui'
import { Box } from '@theme-ui/components'

export const Center = React.forwardRef(
  ({ maxWidth, gutter, intrinsic, centerText, children, ...props }, ref) => {
    const foo = useTheme({})

    return (
      <Box
        ref={ref}
        {...props}
        __css={{
          maxWidth,
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: gutter,
          paddingRight: gutter,
          ...(intrinsic
            ? { display: 'flex', flexDirection: 'column', alignItems: 'center' }
            : {}),
          ...(centerText ? { textAlign: 'center' } : {}),
        }}
      >
        {children}
      </Box>
    )
  }
)

Center.defaultProps = {
  maxWidth: '60ch',
  gutter: 1,
  intrinsic: false,
  centerText: false,
}
