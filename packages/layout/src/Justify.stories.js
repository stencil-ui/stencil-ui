/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { Justify } from './Justify'
import { Box } from '@theme-ui/components'
import { withTheme } from './with-theme'
import { textReact, paragraphs } from '@utilz/dummy'

export default { title: 'Justify', decorators: [withTheme()] }

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

export const withDefault = () => <Justify {...defaultProps} />

export const withMaxWidth = () => <Justify {...defaultProps} maxWidth="20ch" />

export const withGutter = () => <Justify {...defaultProps} gutter={0} />

export const withIntrinsic = () => (
  <Justify {...defaultProps} intrinsic={true} />
)

export const withCenterText = () => (
  <Justify {...defaultProps} centerText={true} />
)
