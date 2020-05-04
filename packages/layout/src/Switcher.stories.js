/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { Switcher } from './Switcher'
import { Box } from '@theme-ui/components'
import { textReact, paragraphs } from '@utilz/dummy'
import { arrayOfSize } from './utils'

export default { title: 'Switcher' }

const BorderBox = props => (
  <Box {...props} __css={{ border: '1px solid #ccc', padding: '10px' }}>
    {textReact(paragraphs(5)).map(props => (
      <p css={{ margin: '1rem' }} {...props} />
    ))}
  </Box>
)

const defaultProps = numberItems => ({
  children: (
    <React.Fragment>
      {arrayOfSize(numberItems).map(i => (
        <BorderBox key={i} />
      ))}
    </React.Fragment>
  ),
})

export const withDefault = () => (
  <Switcher>
    <BorderBox />
    <BorderBox />
    <BorderBox />
  </Switcher>
)

export const withThreshold = () => (
  <Switcher {...defaultProps(3)} threshold="60rem" />
)

export const withSpace = () => <Switcher {...defaultProps(3)} space="5rem" />

export const withLimit2And4Items = () => (
  <Switcher {...defaultProps(4)} limit={2} />
)

export const withLimit2And2Items = () => (
  <Switcher {...defaultProps(2)} limit={2} />
)

export const withLimit4 = () => (
  <Switcher limit={4}>
    <BorderBox />
    <BorderBox />
    <BorderBox />
    <BorderBox />
  </Switcher>
)
