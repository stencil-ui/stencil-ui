import React from 'react'
import { Box } from '@theme-ui/components'
import PropTypes from 'prop-types'

export interface CoverProps {
  space?: string | number
  minHeight?: string | number
  top?: React.ReactNode
  bottom?: React.ReactNode
  children: React.ReactNode
  [x: string]: unknown
}

export const Cover = React.forwardRef(
  (
    { space, minHeight, top, children, bottom, ...props }: CoverProps,
    ref?: React.Ref<HTMLDivElement>
  ) => {
    return (
      <Box
        ref={ref}
        {...props}
        css={{
          display: 'flex',
          flexDirection: 'column',
          minHeight,
        }}
      >
        {top && (
          <Box
            css={{
              marginTop: 0,
              marginBottom: space,
            }}
          >
            {top}
          </Box>
        )}
        <Box
          css={{
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        >
          {React.Children.only(children)}
        </Box>
        {bottom && (
          <Box
            css={{
              marginTop: space,
              marginBottom: 0,
            }}
          >
            {bottom}
          </Box>
        )}
      </Box>
    )
  }
)

Cover.propTypes = {
  top: PropTypes.node,
  children: PropTypes.node.isRequired,
  bottom: PropTypes.node,
}

Cover.defaultProps = {
  space: '0px',
  minHeight: '100vh',
}
