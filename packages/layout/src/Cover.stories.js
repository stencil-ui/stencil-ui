/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Cover } from './Cover'
import { BorderBox, Paragraphs } from './utils'

export default { title: 'Cover' }

export const withDefault = () => (
  <Cover>
    <BorderBox>
      <Paragraphs />
    </BorderBox>
  </Cover>
)
