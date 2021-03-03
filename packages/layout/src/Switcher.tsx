/** @jsxImportSource @theme-ui/core */
import React from 'react'
import { useThemeUI } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import { normaliseSpace, getChildren } from './utils'

export interface SwitchProps {
  threshold?: string | number
  space?: string | number
  limit?: number
  children: React.ReactNode
  [x: string]: unknown
}

export const Switcher = React.forwardRef(
  (
    { threshold, space, limit, children, ...props }: SwitchProps,
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
        {React.Children.map(getChildren(children), (c, i) => (
          <Box
            key={i}
            css={{
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
