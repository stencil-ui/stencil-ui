import React from 'react'
import { Stack } from './Stack'
import { base as theme } from '@theme-ui/preset-base'

export default { title: 'Stack' }

export const withDefault = () => (
  <Stack>
    <p>Content</p>
  </Stack>
)
