import React, { forwardRef } from 'react'
import { Box } from '@theme-ui/components'

export interface FrameProps {
  ratio?: string
  children: React.ReactNode
  [key: string]: unknown
}

export const Frame = forwardRef<HTMLDivElement, FrameProps>(
  ({ ratio = '16:9', children, ...props }, ref) => {
    const child = React.Children.only(children)
    const ratioParts = ratio ? ratio.split(':') : [16, 9]

    return (
      <Box
        ref={ref}
        {...props}
        css={{
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
  }
)

Frame.displayName = 'Frame'
