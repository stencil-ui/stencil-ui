/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { Switcher } from './Switcher'
import { Box } from '@theme-ui/components'
import { textReact, paragraphs } from '@utilz/dummy'

export default { title: 'Switcher' }

const BorderBox = () => (
  <Box css={{ border: '1px solid #ccc', padding: '10px' }}>
    {textReact(paragraphs(5)).map(props => (
      <p css={{ margin: '1rem' }} {...props} />
    ))}
  </Box>
)

const defaultProps = {
  children: (
    <React.Fragment>
      <BorderBox />
      <BorderBox />
      <BorderBox />
    </React.Fragment>
  ),
}

export const withDefault = () => <Switcher {...defaultProps} />

export const withThreshold = () => (
  <Switcher {...defaultProps} threshold="40rem" />
)

export const withSpace = () => <Switcher {...defaultProps} space="5rem" />

export const withLimit2 = () => <Switcher {...defaultProps} limit={2} />

export const withLimit4 = () => (
  <Switcher limit={4}>
    <React.Fragment>
      <BorderBox />
      <BorderBox />
      <BorderBox />
      <BorderBox />
    </React.Fragment>
  </Switcher>
)
