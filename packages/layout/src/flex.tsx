import React, { forwardRef } from 'react'
import { Box } from '@theme-ui/components'

export interface FlexProps {
  direction?: 'row' | 'column'
  align?: string // TODO: type
  justify?: string // TODO: type
  children: React.ReactNode
  [key: string]: unknown
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      direction = 'row',
      align = 'stretch',
      justify = 'flex-start',
      children,
      ...props
    },
    ref
  ) => (
    <Box
      ref={ref}
      {...props}
      css={{
        display: 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
      }}
    >
      {children}
    </Box>
  )
)

Flex.displayName = 'Flex'
