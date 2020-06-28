/** @jsx jsx */
import React from 'react'
import { jsx, useThemeUI } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import { normaliseSpace } from './utils'

export const Icon = React.forwardRef(
  ({ space, label, align, width, height, children, ...props }, ref) => {
    const { theme } = useThemeUI()
    const adjustedSpace = normaliseSpace(theme)(space)

    return (
      <Box
        ref={ref}
        {...props}
        role={label ? 'img' : undefined}
        aria-label={label}
        __css={{
          display: 'inline-flex',
          alignItems: align,
          '> svg': {
            marginInlineEnd: adjustedSpace,
            height,
            width,
          },
        }}
      >
        {children}
      </Box>
    )
  }
)

Icon.defaultProps = {
  space: '0px',
  label: undefined,
  align: 'baseline',
  height: '1rem',
  width: '1rem',
}
