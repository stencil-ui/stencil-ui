/** @jsx jsx */
import React from 'react'
import { jsx, ThemeProvider } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import { Grid } from './Grid'
import { textReact, paragraphs } from '@utilz/dummy'
import { arrayOfSize } from './utils'
import { defaultTheme } from '@themeprint/ui'

export default { title: 'Grid' }

const BorderBox = () => (
  <Box css={{ border: '1px solid #ccc', padding: '10px' }}>
    {textReact(paragraphs(2)).map(props => (
      <p css={{ margin: '1rem' }} {...props} />
    ))}
  </Box>
)

const defaultProps = childrenNumber => ({
  children: (
    <React.Fragment>
      {arrayOfSize(childrenNumber).map(i => (
        <BorderBox key={i} />
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
    <Grid {...defaultProps(6)} space={theme => theme.space[2]} />
  </ThemeProvider>
)

export const withMinWidth = () => <Grid {...defaultProps(6)} minWidth="140px" />
