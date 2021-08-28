import React, { forwardRef } from 'react'
import { Flex } from './flex'

export interface CenterProps {
  children: React.ReactNode
  centerText?: boolean
  [key: string]: unknown
}

export const Center = forwardRef<HTMLDivElement, CenterProps>(
  ({ children, centerText = false, ...props }, ref) => {
    return (
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
  }
)

Center.displayName = 'Center'
