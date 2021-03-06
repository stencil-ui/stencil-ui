/** @jsxImportSource @theme-ui/core */
import { Fragment } from 'react'
import { Box } from '@theme-ui/components'
import { Stack } from './Stack'
import { Center } from './Center'
import { BorderBox } from './utils'
import { withTheme } from './with-theme'

export default { title: 'Stack', decorators: [withTheme()] }

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

export const withNoStretch = () => (
  <Box sx={{ border: '1px solid #ccc', height: '400px', width: '400px' }}>
    <Center>
      <Stack stretch={false}>
        <BorderBox />
        <BorderBox sx={{ margin: 0 }} />
      </Stack>
    </Center>
  </Box>
)
