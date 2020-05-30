import { addDecorator } from '@storybook/react'
import { withPulse } from 'storybook-addon-pulse'

addDecorator(withPulse)

// addDecorator(storyFn => (
//   <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
// ))
