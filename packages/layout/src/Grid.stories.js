import React from 'react'
import { ThemeProvider } from '@theme-ui/core'
import { Grid } from './Grid'
import { arrayOfSize, BorderBox, Paragraphs } from './utils'
import { defaultTheme } from '@themeprint/ui'
import { withTheme } from './with-theme'

export default { title: 'Grid', decorators: [withTheme()] }

const defaultProps = (childrenNumber) => ({
  children: (
    <React.Fragment>
      {arrayOfSize(childrenNumber).map((i) => (
        <BorderBox key={i}>
          <Paragraphs number={2} />
        </BorderBox>
      ))}
    </React.Fragment>
  ),
})

export const withEven = () => <Grid {...defaultProps(6)} />

export const withOdd = () => <Grid {...defaultProps(7)} />

export const withSpacePx = () => <Grid {...defaultProps(6)} space="10px" />

export const withSpaceEm = () => <Grid {...defaultProps(6)} space="2em" />

export const withSpaceRem = () => <Grid {...defaultProps(6)} space="3rem" />

export const withSpaceFunction = () => (
  <ThemeProvider theme={defaultTheme}>
    <Grid {...defaultProps(6)} space={(theme) => theme.space[2]} />
  </ThemeProvider>
)

export const withMinWidth = () => <Grid {...defaultProps(6)} minWidth="140px" />
