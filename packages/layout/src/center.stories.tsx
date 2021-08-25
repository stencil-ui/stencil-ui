import React from 'react'
import { Center } from './center'
import { withTheme, arrayOfSize, BorderBox, Paragraphs } from 'storybook'

export default { title: 'Center', decorators: [withTheme()] }

const defaultProps = (childrenNumber: number) => ({
  children: (
    <React.Fragment>
      {arrayOfSize(childrenNumber).map((i) => (
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
