import React, { Fragment } from 'react'
import { Cluster } from './cluster'
import { withTheme, arrayOfSize, BorderBox, Words } from 'storybook'

export default { title: 'Cluster', decorators: [withTheme()] }

const Content = (props: Record<string, unknown>) => (
  <BorderBox {...props}>
    <Words number={1} />
  </BorderBox>
)

const defaultProps = {
  children: (
    <React.Fragment>
      {arrayOfSize(10).map((i) => (
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
    {arrayOfSize(10).map((i) => (
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

export const withStringSpace = () => <Cluster {...defaultProps} space="l" />

withStringSpace.story = {
  decorators: [
    withTheme({
      space: {
        l: 24,
      },
    }),
  ],
}
