/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from '@theme-ui/core'
import { Stack } from './Stack'
import { Box } from '@theme-ui/components'

export default { title: 'Stack' }

const BorderBox = ({ children, ...props }) => (
  <Box {...props} __css={{ border: '1px solid #ccc', padding: '10px' }}>
    {children}
  </Box>
)
export const withDefault = () => (
  <Stack>
    <BorderBox />
    <BorderBox />
  </Stack>
)

export const withSpace = () => (
  <Stack space={2}>
    <BorderBox />
    <BorderBox />
  </Stack>
)

export const withFragment = () => (
  <Stack space={2}>
    <Fragment>
      <BorderBox />
      <BorderBox />
    </Fragment>
  </Stack>
)

export const withExplictChildMargin = () => (
  <Stack space={2}>
    <BorderBox />
    <BorderBox sx={{ margin: 0 }} />
  </Stack>
)
