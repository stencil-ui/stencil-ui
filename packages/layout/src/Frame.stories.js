/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Frame } from './Frame'

export default { title: 'Frame' }

const defaultProps = {
  children: <img src="https://picsum.photos/200/300" />,
}

export const withDefault = () => <Frame {...defaultProps} />

export const withRatio = () => <Frame {...defaultProps} ratio="4:3" />

export const withMultipleChildrenError = () => (
  <Frame>
    <img src="https://picsum.photos/200/300" />
    <img src="https://picsum.photos/200/300" />
  </Frame>
)
