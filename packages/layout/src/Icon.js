/** @jsx jsx */
import React from 'react'
import { jsx, useThemeUI } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import { normaliseSpace } from './utils'

export const Icon = React.forwardRef(
  ({ space, label, align, children, ...props }, ref) => {
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
            height: '0.75em',
            // height: '1cap',
            width: '0.75em',
            // width: '1cap',
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
}
