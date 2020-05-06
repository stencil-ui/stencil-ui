/** @jsx jsx */
import React from 'react'
import { jsx, useThemeUI } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import { normaliseUnit } from './utils'

export const Switcher = React.forwardRef(
  ({ threshold, space, limit, children, ...props }, ref) => {
    const { theme } = useThemeUI()
    const adjustedSpace = normaliseUnit(theme)(space)

    // TODO: ensure a unit is provided for space and threshold, e.g. rem, px etc.
    return (
      <Box
        ref={ref}
        {...props}
        __css={{
          display: 'flex',
          flexWrap: 'wrap',
          overflow: 'hidden',
          margin: `calc((${adjustedSpace} / 2) * -1)`,
          [`:nth-last-of-type(n+${Number(limit) + 1})`]: {
            flexBasis: '100%',
          },
          [`:nth-last-of-type(n+${Number(limit) + 1}) ~ *`]: {
            flexBasis: '100%',
          },
        }}
      >
        {React.Children.map(children, (c, i) => (
          <Box
            key={i}
            __css={{
              display: 'flex',
              margin: `calc(${adjustedSpace} / 2)`,
              flexBasis: `calc((${threshold} - (100% - ${adjustedSpace})) * 999)`,
              flexGrow: 1,
            }}
          >
            {c}
          </Box>
        ))}
      </Box>
    )
  }
)

Switcher.defaultProps = {
  space: '0px',
  threshold: '40rem',
  limit: 3,
}
