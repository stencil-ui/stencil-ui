import React from 'react'
import { Box } from '@theme-ui/components'
import { withTheme } from 'storybook'
import { Icon } from './icon'

export default {
  title: 'Icon',
  decorators: [
    withTheme({
      space: {
        m: '4rem',
      },
    }),
  ],
}

type SvgProps = {
  width: number
  height: number
  viewBoxWidth: number
  viewBoxHeight: number
  children: React.ReactNode
}

const Svg = ({
  width,
  height,
  viewBoxWidth,
  viewBoxHeight,
  children,
  ...props
}: SvgProps) => (
  <Box
    sx={{
      minWidth: width,
    }}
    {...props}
    width={width}
    height={height}
    viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
  >
    {children}
  </Box>
)

const PinIcon = (props: Record<string, unknown>) => (
  <Svg {...props} width={12} height={16} viewBoxWidth={384} viewBoxHeight={512}>
    <path
      fill="currentColor"
      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
    />
  </Svg>
)

export const withDefault = () => (
  <Icon>
    <PinIcon /> Address
  </Icon>
)

export const withSpace = () => (
  <Icon space="1rem">
    <PinIcon /> Address
  </Icon>
)

export const withNamedSpace = () => (
  <Icon space="m">
    <PinIcon /> Address
  </Icon>
)

export const withLabel = () => (
  <Icon label="label">
    <PinIcon /> Address
  </Icon>
)

export const withAlign = () => (
  <Icon align="center">
    <PinIcon /> Address
  </Icon>
)

export const withWidthHeight = () => (
  <Icon align="center" width="2rem" height="2rem">
    <PinIcon /> Address
  </Icon>
)
