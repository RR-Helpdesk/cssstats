import "@fontsource/khand"
import "@fontsource/sarabun"
import "@fontsource/courier-prime"
import "@fontsource/barlow"

export default {
  fonts: {
    body: '"Sarabun", Sarabun, "Open Sans", sans-serif',
    heading: '"Khand", Khand, Georgia, sans-serif',
    title: '"Barlow", Barlow, "Open Sans", sans-serif',
    monospace: '"Courier Prime", "Courier Prime", "Open Sans", sans-serif',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
  initialColorMode: 'light',
  fontWeights: {
    body: 300,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    primary: '#1c447f',
    secondary: '#5b8aa0',
    black: '#1c447f',
    text: '#1c447f',
    boxtext: '#fafafa',
    blue: '#5B8aa0',
    darkGray: '#1c447f',
    gray: '#5B8aa0',
    lightGray: '#b2d3de',
    chart: ['#5B8AA0', '#b2d3de'],
    boxbackground: '#5E688D',
    background: '#fafafa',
    modes: {
      dark: {
        primary: '#fafafa',
        secondary: '#5b8aa0',
        black: '#fafafa',
        text: '#fafafa',
        boxtext: '#1c447f',
        blue: '#b2d3de',
        lightGray: '#fafafa',
        gray: '#5B8aa0',
        darkGray: '#5B8AA0',
        chart: ['#5B8AA0', '#b2d3de'],
        boxbackground: '#fafafa',
        background: '#1c447f',
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
    },
    a: {
      fontFamily: 'heading',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: 'blue',
    },
    p: {
      fontFamily: 'body',
      fontSize: 3,
      lineHeight: 1.5,
      maxWidth: 800,
    },
    li: {
      fontSize: 3,
      lineHeight: 1.5,
    },
    blockquote: {
      color: 'darkGray',
      borderLeft: '8px solid',
      borderColor: 'blue',
      pl: 4,
      py: 2,
      '& p': {
        fontSize: 4,
      },
    },
    hr: {
      my: 4,
      borderStyle: 'solid',
      borderColor: 'lightGray',
    },
    inlineCode: {
      backgroundColor: 'lightGray',
      px: 2,
    },
    pre: {
      fontSize: 3,
      backgroundColor: 'lightGray',
      borderRadius: 4,
      p: 3,
      overflowX: 'auto',
    },
    textStyles: {
      caps: {
        color: 'primary',
        fontFamily: 'heading',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      },
    },
  },
}
  