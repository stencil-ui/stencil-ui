import React from 'react'
import { Box } from '@theme-ui/components'

export interface GridProps {
  space?: string | number
  minWidth?: string | number
  children: React.ReactNode
  [x: string]: unknown
}

export const Grid = React.forwardRef(
  (
    { space, minWidth, children, ...props }: GridProps,
    ref?: React.Ref<HTMLDivElement>
  ) => (
    <Box
      ref={ref}
      {...props}
      css={{
        display: 'grid',
        gridGap: space,
        alignContent: 'start',
        gridTemplateColumns: '100%',
        [`@supports (width: min(${minWidth}, 100%))`]: {
          gridTemplateColumns: `repeat(auto-fill, minmax(min(${minWidth}, 100%), 1fr))`,
        },
      }}
    >
      {children}
    </Box>
  )
)

Grid.defaultProps = {
  space: '0px',
  minWidth: '250px',
}
