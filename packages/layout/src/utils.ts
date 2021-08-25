import { css, Theme } from '@theme-ui/css'
import { unit } from '@themeprint/ui'
import { isFragment } from 'react-is'

export const normaliseSpace =
  (theme: Theme) =>
  (space: string | number): string => {
    const { margin } = css({ margin: space })(theme)
    return unit(margin).css()
  }

export const getChildren = (children: React.ReactNode): React.ReactNode => {
  if (isFragment(children)) {
    if (children.props) {
      return children.props.children
    }
  }

  return children
}
