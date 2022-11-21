import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@ignite-ui/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  config,
  theme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    with: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
