/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { Center } from './Center'
import { arrayOfSize, BorderBox, Paragraphs } from './utils'
import { withTheme } from './with-theme'

export default { title: 'Center', decorators: [withTheme()] }

const defaultProps = childrenNumber => ({
  children: (
    <React.Fragment>
      {arrayOfSize(childrenNumber).map(i => (
        <BorderBox key={i}>
          <Paragraphs number={2} />
        </BorderBox>
      ))}
    </React.Fragment>
  ),
})

export const withDefault = () => <Center {...defaultProps(1)} />

export const withCenterText = () => (
  <Center {...defaultProps(1)} centerText={true} />
)
