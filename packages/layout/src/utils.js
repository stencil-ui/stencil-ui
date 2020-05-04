export const arrayOfSize = size =>
  Array(size)
    .fill()
    .map((_, i) => i)

// TODO: convert all unitless values to px
export const normaliseUnit = value =>
  value === '0' || value === 0 ? '0px' : value

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
