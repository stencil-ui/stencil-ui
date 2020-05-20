/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { Flex } from './Flex'

export const Center = React.forwardRef(
  ({ children, centerText, ...props }, ref) => (
    <Flex
      ref={ref}
      {...props}
      sx={{
        ...(centerText ? { textAlign: 'center' } : {}),
      }}
      align="center"
      justify="center"
    >
      {children}
    </Flex>
  )
)

Center.defaultProps = {
  centerText: false,
}
