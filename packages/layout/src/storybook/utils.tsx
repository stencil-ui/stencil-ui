import React from 'react'
import { Box } from '@theme-ui/components'
import { textReact, paragraphs, words } from '@utilz/dummy'

export const arrayOfSize = (size: number): number[] =>
  Array(size)
    .fill(null)
    .map((_, i) => i)

// export const applyStyle = (component, style = {}) => {
//   if (!component) {
//     return { style }
//   }

//   if (!component.props) {
//     return { style }
//   }

//   // TODO: deepmerge
//   return { style: { ...(component.props.style || {}), ...style } }
// }

// export const getChildren = children => {
//   if (isFragment(children)) {
//     return children.props.children
//   }

//   return children
// }

export const BorderBox = ({
  children,
  ...props
}: {
  children?: React.ReactNode
}) => (
  <Box {...props} sx={{ border: '1px solid #ccc', padding: '10px' }}>
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
