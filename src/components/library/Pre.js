import styled from '@emotion/styled'
import { space, fontSize, width, color, borderRadius } from 'styled-system'

const Pre = styled('pre')(
  [],
  props => ({
    maxHeight: '50vh',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch'
  }),
  space,
  fontSize,
  width,
  color,
  borderRadius
)

Pre.defaultProps = {
  bg: 'boxbackground',
  p: 3,
  borderRadius: 4,
  color: 'boxtext',
}

export default Pre
