import React, { forwardRef } from 'react'
import { Box } from '@theme-ui/components'

export interface JustifyProps {
  maxWidth?: string | number
  gutter?: string | number
  intrinsic?: boolean
  centerText?: boolean
  children: React.ReactNode
  [key: string]: unknown
}

export const Justify = forwardRef<HTMLDivElement, JustifyProps>(
  (
    {
      maxWidth = '60ch',
      gutter = '0px',
      intrinsic = false,
      centerText = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        {...props}
        css={{
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

Justify.displayName = 'Justify'
