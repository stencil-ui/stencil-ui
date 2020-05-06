import { isFunction } from '@utilz/types'

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
