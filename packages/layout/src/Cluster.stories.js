/** @jsx jsx */
import React, { Fragment } from 'react'
import { jsx } from '@theme-ui/core'
import { Cluster } from './Cluster'
import { arrayOfSize, BorderBox, Words } from './utils'

export default { title: 'Cluster' }

const Content = props => (
  <BorderBox {...props}>
    <Words number={1} />
  </BorderBox>
)

const defaultProps = {
  children: (
    <React.Fragment>
      {arrayOfSize(10).map(i => (
        <Content key={i} />
      ))}
    </React.Fragment>
  ),
}

export const withDefault = () => <Cluster {...defaultProps} />

export const withSpace = () => <Cluster {...defaultProps} space="1rem" />

export const withJustify = () => <Cluster {...defaultProps} justify="center" />

export const withAlignCenter = () => (
  <Cluster {...defaultProps} align="center" />
)

export const withAlignStretch = () => (
  <Cluster {...defaultProps} sx={{ height: '200px' }} align="stretch" />
)

export const withUnorderedList = () => (
  <Cluster as="ul" space="1rem" sx={{ listStyleType: 'none' }}>
    {arrayOfSize(10).map(i => (
      <li key={i}>{`List item ${i + 1}`}</li>
    ))}
  </Cluster>
)

export const withChildExplicitMargin = () => (
  <Cluster space="1rem">
    <Content />
    <Content />
    <Content sx={{ margin: 0 }} />
  </Cluster>
)

export const withFragment = () => (
  <Cluster space="1rem">
    <Fragment>
      <Content />
      <Content />
      <Content sx={{ margin: 0 }} />
    </Fragment>
  </Cluster>
)
