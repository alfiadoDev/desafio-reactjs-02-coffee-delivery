import { Link } from 'react-router-dom'

import CoffeeLogo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Aside, HeaderContainer } from './styles'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cart } = useCart()

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={CoffeeLogo} alt="" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <Link to="/cart" aria-disabled={cart.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </Aside>
    </HeaderContainer>
  )
}
