/** @jsx jsx */
import React from 'react'
import { jsx, useThemeUI } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import { normaliseUnit, getChildren } from './utils'

export const Cluster = React.forwardRef(
  ({ justify, align, space, children, ...props }, ref) => {
    const { theme } = useThemeUI()
    const adjustedSpace = normaliseUnit(theme)(space)

    return (
      <Box
        ref={ref}
        {...props}
        __css={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: justify,
          alignItems: align,
          margin: `calc(${adjustedSpace} / 2 * -1)`,
        }}
      >
        {React.Children.map(getChildren(children), (c, i) => (
          <Box
            key={i}
            __css={{ display: 'flex', margin: `calc(${adjustedSpace} / 2)` }}
          >
            {c}
          </Box>
        ))}
      </Box>
    )
  }
)

Cluster.defaultProps = {
  justify: 'flex-start',
  align: 'flex-start',
  space: '0px',
}
