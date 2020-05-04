/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import { normaliseUnit, getChildren } from './utils'

// Uses cloneElement to ensure margin is applied
// as Theme UI Box element defines margin: 0
export const Switcher = React.forwardRef(
  ({ threshold, space, limit, children, ...props }, ref) => {
    const adjustedSpace = normaliseUnit(space)
    const childs = getChildren(children)

    // TODO: ensure a unit is provided for space and threshold, e.g. rem, px etc.
    return (
      <Box
        ref={ref}
        {...props}
        __css={{
          '& > *': {},
          '& > * > *': {
            flexBasis: `calc((${threshold} - (100% - ${adjustedSpace})) * 999)`,
            flexGrow: 1,
          },
          [`& > * > :nth-last-of-type(n+${Number(limit) + 1})`]: {
            flexBasis: '100%',
          },
          [`& > * > :nth-last-of-type(n+${Number(limit) + 1}) ~ *`]: {
            flexBasis: '100%',
          },
        }}
      >
        <Box
          __css={{
            display: 'flex',
            flexWrap: 'wrap',
            overflow: 'hidden',
            margin: `calc((${adjustedSpace} / 2) * -1)`,
          }}
        >
          {childs.map((c, i) =>
            React.cloneElement(c, {
              sx: { key: i, margin: `calc(${adjustedSpace} / 2)` },
            })
          )}
        </Box>
      </Box>
    )
  }
)

Switcher.defaultProps = {
  space: '0px',
  threshold: '40rem',
  limit: 3,
}
