export const arrayOfSize = size =>
  Array(size)
    .fill()
    .map((_, i) => i)

// TODO: convert all unitless values to px
export const normaliseUnit = value =>
  value === '0' || value === 0 ? '0px' : value
