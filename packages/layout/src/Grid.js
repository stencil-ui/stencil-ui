/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { Box } from '@theme-ui/components'

export const Grid = React.forwardRef(
  ({ space, minWidth, children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        {...props}
        __css={{
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
  }
)

Grid.defaultProps = {
  space: '0px',
  minWidth: '250px',
}
