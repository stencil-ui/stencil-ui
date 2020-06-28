import React from 'react'
import { base } from '@theme-ui/preset-base'
import { ThemeProvider } from '@theme-ui/core'
import { deepmerge } from '@utilz/deepmerge'

export const withTheme = theme => {
  return storyFn => (
    <ThemeProvider theme={deepmerge(base, theme)}>{storyFn()}</ThemeProvider>
  )
}
