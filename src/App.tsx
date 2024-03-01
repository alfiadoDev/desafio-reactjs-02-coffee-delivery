import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { CartContextProvider } from './context/CartProvider'
import { Header } from './components/Header'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <Header />
        <Outlet />
      </CartContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
