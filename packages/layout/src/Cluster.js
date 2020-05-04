/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import { getChildren, normaliseUnit, applyStyle } from './utils'

export const Cluster = React.forwardRef(
  ({ justify, align, space, children, ...props }, ref) => {
    const adjustedSpace = normaliseUnit(space)
    const childs = getChildren(children)
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
        {childs.map((c, i) => (
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
