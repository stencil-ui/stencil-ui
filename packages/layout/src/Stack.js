/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { Box } from '@theme-ui/components'

export const Stack = React.forwardRef(({ space, children, ...props }, ref) => (
  <Box
    ref={ref}
    {...props}
    __css={{
      ':only-child': {
        height: '100%',
      },
    }}
  >
    {React.Children.map(children, (c, i) => (
      <Box key={i} __css={{ ...(i === 0 ? {} : { marginTop: space }) }}>
        {c}
      </Box>
    ))}
  </Box>
))

Stack.defaultProps = {
  space: '0px',
}
