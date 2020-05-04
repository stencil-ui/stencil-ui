/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import { getChildren } from './utils'

export const Stack = React.forwardRef(({ space, children, ...props }, ref) => {
  const childs = getChildren(children)
  return (
    <Box
      ref={ref}
      {...props}
      __css={{
        ':only-child': {
          height: '100%',
        },
      }}
    >
      {childs.map((c, i) => (
        <Box key={i} __css={{ ...(i === 0 ? {} : { marginTop: space }) }}>
          {c}
        </Box>
      ))}
    </Box>
  )
})

Stack.defaultProps = {
  space: '0px',
}
