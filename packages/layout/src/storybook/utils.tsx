import React from 'react'
import { Box } from '@theme-ui/components'
import { textReact, paragraphs, words } from '@utilz/dummy'
import { ThemeUIStyleObject } from '@theme-ui/css'

export const arrayOfSize = (size: number): number[] =>
  Array(size)
    .fill(null)
    .map((_, i) => i)

export const BorderBox = ({
  sx = {},
  children,
}: {
  sx: ThemeUIStyleObject
  children?: React.ReactNode
}) => (
  <Box sx={{ border: '1px solid #ccc', padding: '10px', ...sx }}>
    {children}
  </Box>
)

export const Paragraphs = ({ number }: { number?: number }) => (
  <Box>
    {textReact(paragraphs(number ?? 5)).map((props) => (
      <p sx={{ margin: '1rem' }} {...props} />
    ))}
  </Box>
)

Paragraphs.defaultProps = {
  number: 5,
}

export const Words = ({ number }: { number: number }) => (
  <Box>
    {textReact(words(number)).map((props) => (
      <p css={{ margin: '1rem' }} {...props} />
    ))}
  </Box>
)

Words.defaultProps = {
  number: 5,
}
