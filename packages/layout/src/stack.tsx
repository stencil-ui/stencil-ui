import React, { forwardRef } from 'react'
import { Box } from '@theme-ui/components'
import { useThemeUI } from '@theme-ui/core'
import { getChildren, normaliseSpace } from './utils'

export interface StackProps {
  space?: string | number
  stretch?: boolean
  children: React.ReactNode
  [x: string]: unknown
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ space = '0px', stretch = true, children, ...props }, ref) => {
    const { theme } = useThemeUI()
    const adjustedSpace = space ? normaliseSpace(theme)(space) : '0px'

    return (
      <Box
        ref={ref}
        {...props}
        css={{
          ...(stretch
            ? {
                ':only-child': {
                  height: '100%',
                },
              }
            : {}),
        }}
      >
        {React.Children.map(getChildren(children), (c, i) => (
          <Box
            key={i}
            css={{ ...(i === 0 ? {} : { marginTop: adjustedSpace }) }}
          >
            {c}
          </Box>
        ))}
      </Box>
    )
  }
)

Stack.displayName = 'Stack'
