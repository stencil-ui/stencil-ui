import React from 'react'
import { addDecorator } from '@storybook/react'
import { base as theme } from '@theme-ui/preset-base'
import { ThemeProvider } from '@theme-ui/core'

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
))
