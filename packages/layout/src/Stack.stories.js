/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { Stack } from './Stack'
import { Box } from '@theme-ui/components'
import { textReact, paragraphs } from '@utilz/dummy'

export default { title: 'Stack' }

const BorderBox = ({ children }) => (
  <Box css={{ border: '1px solid #ccc', padding: '10px' }}>{children}</Box>
)

const Paragraphs = () => (
  <BorderBox>
    {textReact(paragraphs(5)).map(props => (
      <p css={{ margin: '1rem' }} {...props} />
    ))}
  </BorderBox>
)

const defaultProps = {
  children: (
    <React.Fragment>
      <Paragraphs />
      <BorderBox>
        <Paragraphs />
        <Paragraphs />
        <BorderBox>
          <Paragraphs />
          <Paragraphs />
        </BorderBox>
      </BorderBox>
      <Paragraphs />
    </React.Fragment>
  ),
}

export const withDefault = () => <Stack {...defaultProps} />

export const withSpace = () => <Stack {...defaultProps} space={4} />

export const withRecursive = () => <Stack {...defaultProps} recursive={true} />
