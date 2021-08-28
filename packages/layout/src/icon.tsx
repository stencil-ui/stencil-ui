import React, { forwardRef } from 'react'
import { useThemeUI } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import { normaliseSpace } from './utils'

export interface IconProps {
  space?: string | number
  label?: string
  align?: string // TODO: type
  width?: string | number
  height?: string | number
  children: React.ReactNode
  [key: string]: unknown
}

export const Icon = forwardRef<HTMLDivElement, IconProps>(
  (
    {
      space = '0px',
      label,
      align = 'baseline',
      width = '1rem',
      height = '1rem',
      children,
      ...props
    },
    ref
  ) => {
    const { theme } = useThemeUI()
    const adjustedSpace = space ? normaliseSpace(theme)(space) : '0px'

    return (
      <Box
        ref={ref}
        {...props}
        role={label ? 'img' : undefined}
        aria-label={label}
        css={{
          display: 'inline-flex',
          alignItems: align,
          '> svg': {
            marginInlineEnd: adjustedSpace,
            height,
            width,
          },
        }}
      >
        {children}
      </Box>
    )
  }
)

Icon.displayName = 'Icon'
