import { createGlobalStyle } from 'styled-components'
import { typography } from './typography'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    ${typography.textM}
  }

  button {
    border: none;
    cursor: pointer;
  }
`
