/** @jsxImportSource @theme-ui/core */
import React from 'react'
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
  [x: string]: unknown
}

export const Icon = React.forwardRef(
  (
    { space, label, align, width, height, children, ...props }: IconProps,
    ref?: React.Ref<HTMLDivElement>
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

Icon.defaultProps = {
  space: '0px',
  label: undefined,
  align: 'baseline',
  height: '1rem',
  width: '1rem',
}
