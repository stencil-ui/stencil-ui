/** @jsx jsx */
import { jsx } from '@theme-ui/core'

export const Stack = ({
  maxWidth,
  gutter,
  intrinsic,
  centerText,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      base={{
        maxWidth,
        paddingLeft: gutter,
        paddingRight: gutter,
        ...(intrinsic
          ? { display: 'flex', flexDirection: 'column', alignItems: 'center' }
          : {}),
        ...(centerText ? { textAlign: 'center' } : {}),
      }}
    >
      {children}
    </div>
  )
}

Stack.defaultProps = {
  maxWidth: '60ch',
  gutter: 1,
  intrinsic: false,
  centerText: false,
}
