/** @jsxImportSource @theme-ui/core */
import React from 'react'
import { Flex } from './Flex'

export interface CenterProps {
  children: React.ReactNode
  centerText?: boolean
  [x: string]: unknown
}

export const Center = React.forwardRef(
  (
    { children, centerText, ...props }: CenterProps,
    ref?: React.Ref<HTMLDivElement>
  ) => (
    <Flex
      ref={ref}
      {...props}
      css={{
        ...(centerText ? { textAlign: 'center' } : {}),
      }}
      align="center"
      justify="center"
    >
      {children}
    </Flex>
  )
)

Center.defaultProps = {
  centerText: false,
}
