/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Imposter } from './Imposter'
import { BorderBox, Paragraphs } from './utils'

export default { title: 'Imposter' }

const defaultProps = {
  children: (
    <BorderBox>
      <Paragraphs />
    </BorderBox>
  ),
}

export const withDefault = () => <Imposter {...defaultProps} />
