/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { useTheme } from '@themeprint/ui'
import { Box } from '@theme-ui/components'

export const Stack = React.forwardRef(
  ({ space, recursive, children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        {...props}
        __css={{
          ':only-child': {
            height: '100%',
          },
          ...(recursive
            ? {
                '& * + *': {
                  marginTop: space,
                },
              }
            : {
                '& > * + *': {
                  marginTop: space,
                },
              }),
        }}
      >
        {children}
      </Box>
    )
  }
)

Stack.defaultProps = {
  space: 1,
  recursive: false,
}
