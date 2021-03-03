/** @jsxImportSource @theme-ui/core */
import React from 'react'
import { Box } from '@theme-ui/components'

export interface FlexProps {
  direction?: 'row' | 'column'
  align?: string // TODO: type
  justify?: string // TODO: type
  children: React.ReactNode
  [x: string]: unknown
}

export const Flex = React.forwardRef(
  (
    { direction, align, justify, children, ...props }: FlexProps,
    ref?: React.Ref<HTMLDivElement>
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

Flex.defaultProps = {
  direction: 'row',
  align: 'stretch',
  justify: 'flex-start',
}
