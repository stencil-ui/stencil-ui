/** @jsx jsx */
import React from 'react'
import { jsx } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import PropTypes from 'prop-types'

export const Cover = React.forwardRef(
  ({ space, minHeight, top, children, bottom, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        {...props}
        __css={{
          display: 'flex',
          flexDirection: 'column',
          minHeight,
        }}
      >
        {top && (
          <Box
            __css={{
              marginTop: 0,
              marginBottom: space,
            }}
          >
            {top}
          </Box>
        )}
        <Box
          __css={{
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        >
          {React.Children.only(children)}
        </Box>
        {bottom && (
          <Box
            __css={{
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
