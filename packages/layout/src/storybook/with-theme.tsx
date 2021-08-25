import { base } from '@theme-ui/preset-base'
import { Theme, ThemeProvider } from '@theme-ui/core'
import { deepmerge } from '@utilz/deepmerge'

export const withTheme = (theme?: Theme) => {
  return (storyFn: any) => (
    <ThemeProvider theme={deepmerge(base, theme)}>{storyFn()}</ThemeProvider>
  )
}
