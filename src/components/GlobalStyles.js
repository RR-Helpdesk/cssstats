import "@fontsource/khand"
import "@fontsource/sarabun"
import "@fontsource/courier-prime"
import "@fontsource/barlow"

import { Global } from '@emotion/react'
import { ThemeProvider } from 'theme-ui'
import { toTheme } from '@theme-ui/typography'

const GlobalStyles = () => (
    <Global
    styles={() => ({
        '*': {
            boxSizing: 'border-box',
        },
        body: {
            fontFamily: '"Sarabun", sans-serif',
            fontFamily: '"Khand", sans-serif',
            fontFamily: '"Barlow", sans-serif',
            fontFamily: '"Courier Prime", sans-serif',
        },
    })}
    />
)

export default GlobalStyles