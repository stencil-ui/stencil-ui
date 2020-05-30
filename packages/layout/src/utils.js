/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { css } from '@theme-ui/css'
import { Box } from '@theme-ui/components'
import { unit } from '@themeprint/ui'
import { textReact, paragraphs, words } from '@utilz/dummy'
import { isFragment } from 'react-is'

export const arrayOfSize = size =>
  Array(size)
    .fill()
    .map((_, i) => i)

export const normaliseSpace = theme => space => {
  const { margin } = css({ margin: space })(theme)
  return unit(margin).css()
}

export const applyStyle = (component, style = {}) => {
  if (!component) {
    return { style }
  }

  if (!component.props) {
    return { style }
  }

  // TODO: deepmerge
  return { style: { ...(component.props.style || {}), ...style } }
}

export const getChildren = children => {
  if (isFragment(children)) {
    return children.props.children
  }

  return children
}

export const BorderBox = ({ children, ...props }) => (
  <Box {...props} __css={{ border: '1px solid #ccc', padding: '10px' }}>
    {children}
  </Box>
)

export const Paragraphs = ({ number }) => (
  <Box>
    {textReact(paragraphs(number)).map(props => (
      <p css={{ margin: '1rem' }} {...props} />
    ))}
  </Box>
)

Paragraphs.defaultProps = {
  number: 5,
}

export const Words = ({ number }) => (
  <Box>
    {textReact(words(number)).map(props => (
      <p css={{ margin: '1rem' }} {...props} />
    ))}
  </Box>
)

Words.defaultProps = {
  number: 5,
}
