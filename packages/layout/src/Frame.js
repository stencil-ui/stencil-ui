/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { Box } from '@theme-ui/components'

export const Frame = React.forwardRef(({ ratio, children, ...props }, ref) => {
  const child = React.Children.only(children)
  const ratioParts = ratio.split(':')

  return (
    <Box
      ref={ref}
      {...props}
      __css={{
        position: 'relative',
        paddingBottom: `calc(${ratioParts[1]} / ${ratioParts[0]} * 100%)`,
        '& > *': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        '& > img, & > video': {
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        },
      }}
    >
      {child}
    </Box>
  )
})

Frame.defaultProps = {
  ratio: '16:9',
}
