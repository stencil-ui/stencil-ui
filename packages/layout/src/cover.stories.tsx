import { Cover } from './cover'
import { withTheme, BorderBox, Paragraphs, Words } from 'storybook'

export default { title: 'Cover', decorators: [withTheme()] }

const defaultProps = {
  children: (
    <BorderBox>
      <Paragraphs number={5} />
    </BorderBox>
  ),
}

export const withDefault = () => <Cover {...defaultProps} />

export const withTop = () => (
  <Cover
    {...defaultProps}
    top={
      <BorderBox>
        <Words number={1} />
      </BorderBox>
    }
  />
)

export const withBottom = () => (
  <Cover
    {...defaultProps}
    bottom={
      <BorderBox>
        <Words number={1} />
      </BorderBox>
    }
  />
)

export const withTopAndBottom = () => (
  <Cover
    {...defaultProps}
    top={
      <BorderBox>
        <Words number={1} />
      </BorderBox>
    }
    bottom={
      <BorderBox>
        <Words number={1} />
      </BorderBox>
    }
  />
)

export const withSpace = () => (
  <Cover
    {...defaultProps}
    space="2rem"
    top={
      <BorderBox>
        <Words number={1} />
      </BorderBox>
    }
    bottom={
      <BorderBox>
        <Words number={1} />
      </BorderBox>
    }
  />
)

export const withMinHeight = () => (
  <Cover
    space="2rem"
    minHeight="200px"
    top={
      <BorderBox>
        <Words number={1} />
      </BorderBox>
    }
    children={
      <BorderBox>
        <Words number={1} />
      </BorderBox>
    }
    bottom={
      <BorderBox>
        <Words number={1} />
      </BorderBox>
    }
  />
)
