/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { Center } from './Center'
import { Box } from '@theme-ui/components'
import { base as theme } from '@theme-ui/preset-base'

import { textReact, paragraphs } from '@utilz/dummy'

export default { title: 'Center' }

const defaultProps = {
  children: (
    <React.Fragment>
      {textReact(paragraphs(5)).map(props => (
        <p {...props} />
      ))}
      <Box css={{ border: '1px solid #ccc', padding: 4 }}>Content</Box>
    </React.Fragment>
  ),
}

export const withDefault = () => <Center {...defaultProps} />

export const withMaxWidth = () => <Center {...defaultProps} maxWidth="20ch" />

export const withGutter = () => <Center {...defaultProps} gutter={0} />

export const withIntrinsic = () => <Center {...defaultProps} intrinsic={true} />

export const withCenterText = () => (
  <Center {...defaultProps} centerText={true} />
)
