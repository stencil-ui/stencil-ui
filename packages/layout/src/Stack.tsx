import React from 'react'
import { Box } from '@theme-ui/components'
import { getChildren } from './utils'

export interface StackProps {
  space?: string | number
  stretch?: boolean
  children: React.ReactNode
  [x: string]: unknown
}

export const Stack = React.forwardRef(
  (
    { space, stretch, children, ...props }: StackProps,
    ref?: React.Ref<HTMLDivElement>
  ) => (
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
        <Box key={i} css={{ ...(i === 0 ? {} : { marginTop: space }) }}>
          {c}
        </Box>
      ))}
    </Box>
  )
)

Stack.defaultProps = {
  space: '0px',
  stretch: true,
}
