import React, { forwardRef } from 'react'
import { Box } from '@theme-ui/components'

export interface CoverProps {
  space?: string | number
  minHeight?: string | number
  top?: React.ReactNode
  bottom?: React.ReactNode
  children: React.ReactNode
  [key: string]: unknown
}

export const Cover = forwardRef<HTMLDivElement, CoverProps>(
  (
    { space = '0px', minHeight = '100vh', top, children, bottom, ...props },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        {...props}
        css={{
          display: 'flex',
          flexDirection: 'column',
          minHeight,
        }}
      >
        {top && (
          <Box
            css={{
              marginTop: 0,
              marginBottom: space,
            }}
          >
            {top}
          </Box>
        )}
        <Box
          css={{
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        >
          {React.Children.only(children)}
        </Box>
        {bottom && (
          <Box
            css={{
              marginTop: space,
              marginBottom: 0,
            }}
          >
            {bottom}
          </Box>
        )}
      </Box>
    )
  }
)

Cover.displayName = 'Cover'
