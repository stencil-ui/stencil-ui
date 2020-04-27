/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { Box } from '@theme-ui/components'

export const Switcher = React.forwardRef(
  ({ threshold, space, limit, children, ...props }, ref) => {
    const adjustedSpace = space === '0' || space === 0 ? '0px' : space
    // TODO: ensure a unit is provided for space and threshold, e.g. rem, px etc.
    return (
      <Box
        ref={ref}
        {...props}
        __css={{
          '& > *': {
            display: 'flex',
            flexWrap: 'wrap',
            overflow: 'hidden',
            margin: `calc((${adjustedSpace} / 2) * -1)`,
          },
          '& > * > *': {
            flexBasis: `calc((${threshold} - (100% - ${adjustedSpace})) * 999)`,
            margin: `calc(${adjustedSpace} / 2)`,
            flexGrow: 1,
          },
          [`& > * > :nth-last-child(n+${Number(limit) + 1})`]: {
            flexBasis: '100%',
          },
          [`& > * > :nth-last-child(n+${Number(limit) + 1}) ~ *`]: {
            flexBasis: '100%',
          },
        }}
      >
        <Box>{children}</Box>
      </Box>
    )
  }
)

Switcher.defaultProps = {
  space: '1rem',
  threshold: '30rem',
  limit: 4,
}
