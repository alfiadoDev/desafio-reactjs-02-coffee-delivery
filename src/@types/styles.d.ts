import 'styled-components'
import { defaultTheme } from '../styles/theme/default'

type themeType = typeof defaultTheme

declare module 'styled-components' {
  // eslint-disable-next-line prettier/prettier
  export interface DefaultTheme extends themeType { }
}
