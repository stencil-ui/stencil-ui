import React from 'react'
import { base } from '@theme-ui/preset-base'
import { ThemeProvider } from '@theme-ui/core'

export const withTheme = theme => {
  return storyFn => (
    <ThemeProvider theme={theme || base}>{storyFn()}</ThemeProvider>
  )
}
