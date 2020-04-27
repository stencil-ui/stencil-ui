/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { Cluster } from './Cluster'
import { Box } from '@theme-ui/components'
import { textReact, words } from '@utilz/dummy'
import { arrayOfSize } from './utils'

export default { title: 'Cluster' }

const BorderBox = () => (
  <Box css={{ border: '1px solid #ccc', padding: '10px' }}>
    {textReact(words(1)).map(props => (
      <p css={{ margin: '1rem' }} {...props} />
    ))}
  </Box>
)

const defaultProps = {
  children: (
    <React.Fragment>
      {arrayOfSize(10).map(i => (
        <BorderBox key={i} />
      ))}
    </React.Fragment>
  ),
}

export const withDefault = () => <Cluster {...defaultProps} />

export const withSpace = () => <Cluster {...defaultProps} space="3rem" />

export const withJustify = () => <Cluster {...defaultProps} justify="center" />

export const withAlign = () => <Cluster {...defaultProps} align="center" />

export const withUnorderedList = () => (
  <Cluster as="ul" space="1rem" sx={{ listStyleType: 'none' }}>
    {arrayOfSize(10).map(i => (
      <li key={i}>{`List item ${i + 1}`}</li>
    ))}
  </Cluster>
)
