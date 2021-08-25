import React from 'react'
import { Switcher } from './switcher'
import { withTheme, arrayOfSize, BorderBox, Paragraphs } from 'storybook'

export default { title: 'Switcher', decorators: [withTheme()] }

const Content = (props: Record<string, unknown>) => (
  <BorderBox {...props}>
    <Paragraphs />
  </BorderBox>
)

const defaultProps = (numberItems: number) => ({
  children: (
    <React.Fragment>
      {arrayOfSize(numberItems).map((i: number) => (
        <Content key={i} />
      ))}
    </React.Fragment>
  ),
})

export const withDefault = () => (
  <Switcher>
    <Content />
    <Content />
    <Content />
  </Switcher>
)

export const withThreshold = () => (
  <Switcher {...defaultProps(3)} threshold="60rem" />
)

export const withSpaceFunction = () => (
  <Switcher space={() => '1rem'}>
    <Content />
    <Content />
    <Content />
  </Switcher>
)

export const withFragment = () => <Switcher {...defaultProps(3)} space="5rem" />

export const withLimit2And4Items = () => (
  <Switcher {...defaultProps(4)} limit={2} />
)

export const withLimit2And2Items = () => (
  <Switcher {...defaultProps(2)} limit={2} />
)

export const withLimit4 = () => (
  <Switcher limit={4}>
    <Content />
    <Content />
    <Content />
    <Content />
  </Switcher>
)

export const withExplictChildMargin = () => (
  <Switcher space="1rem">
    <Content />
    <Content />
    <Content sx={{ margin: 0 }} />
  </Switcher>
)

export const withChildStyle = () => (
  <Switcher space="1rem">
    <Content />
    <Content />
    <Content style={{ backgroundColor: '#ccc' }} />
  </Switcher>
)
