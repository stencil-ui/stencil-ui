/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import { Grid } from './Grid'
import { textReact, paragraphs } from '@utilz/dummy'
import { arrayOfSize } from './utils'

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

export const withSpace = () => <Grid {...defaultProps(6)} space="3rem" />

export const withMinWidth = () => <Grid {...defaultProps(6)} minWidth="140px" />
