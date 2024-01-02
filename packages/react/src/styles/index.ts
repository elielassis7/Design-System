import { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space } from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const { styled, css, config, getCssText, globalCss, keyframes, theme, createTheme } = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space'
  }
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,

  }
})