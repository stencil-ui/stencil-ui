import React from 'react'
import { Box } from '@theme-ui/components'

export interface JustifyProps {
  maxWidth?: string | number
  gutter?: string | number
  intrinsic?: boolean
  centerText?: boolean
  children: React.ReactNode
  [x: string]: unknown
}

export const Justify = React.forwardRef(
  (
    {
      maxWidth,
      gutter,
      intrinsic,
      centerText,
      children,
      ...props
    }: JustifyProps,
    ref?: React.Ref<HTMLDivElement>
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

Justify.defaultProps = {
  maxWidth: '60ch',
  gutter: '0px',
  intrinsic: false,
  centerText: false,
}
