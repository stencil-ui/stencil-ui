/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import { isFunction } from '@utilz/types'
import { textReact, paragraphs, words } from '@utilz/dummy'

export const arrayOfSize = size =>
  Array(size)
    .fill()
    .map((_, i) => i)

// TODO: convert all unitless values to px
export const normaliseUnit = theme => value => {
  const resolved = isFunction(value) ? value(theme) : value
  return resolved === '0' || resolved === 0 ? '0px' : resolved
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
