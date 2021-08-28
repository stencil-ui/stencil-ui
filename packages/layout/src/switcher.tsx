import React, { forwardRef } from 'react'
import { useThemeUI } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import { normaliseSpace, getChildren } from './utils'

export interface SwitchProps {
  threshold?: string | number
  space?: string | number
  limit?: number
  children: React.ReactNode
  [key: string]: unknown
}

export const Switcher = forwardRef<HTMLDivElement, SwitchProps>(
  (
    { threshold = '40rem', space = '0px', limit = 3, children, ...props },
    ref
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

Switcher.displayName = 'Switcher'
