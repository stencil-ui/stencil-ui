import React from 'react'
import { useThemeUI } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import { normaliseSpace, getChildren } from './utils'

export interface ClusterProps {
  justify?: string // TODO: type
  align?: string // TODO: type
  space?: string | number
  children: React.ReactNode
  [x: string]: unknown
}

export const Cluster = React.forwardRef(
  (
    { justify, align, space, children, ...props }: ClusterProps,
    ref?: React.Ref<HTMLDivElement>
  ) => {
    const { theme } = useThemeUI()
    const adjustedSpace = space ? normaliseSpace(theme)(space) : '0px'

    return (
      <Box
        ref={ref}
        {...props}
        css={{
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
            sx={{ display: 'flex', margin: `calc(${adjustedSpace} / 2)` }}
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
