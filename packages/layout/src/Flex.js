/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { Box } from '@theme-ui/components'

export const Flex = React.forwardRef(
  ({ direction, align, justify, children, ...props }, ref) => (
    <Box
      ref={ref}
      {...props}
      __css={{
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
