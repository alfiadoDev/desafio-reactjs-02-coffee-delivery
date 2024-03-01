import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import heroImage from '../../assets/images/hero-bg.svg'
import heroBackgroundImage from '../../assets/images/hero.svg'

import { coffees } from '../../../coffee.json'

import {
  CoffeeList,
  Heading,
  HeroContainer,
  HeroContent,
  Info,
} from './styles.cts'
import { CoffeeCard } from './components/CoffeeCard'
import { useTheme } from 'styled-components'

export function Home() {
  const theme = useTheme()

  return (
    <>
      <HeroContainer>
        <HeroContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <Info>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.background}
                  style={{ backgroundColor: theme['yellow-dark'] }}
                />
                <span>Compra simples e segura</span>
              </div>
              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.background}
                  style={{ backgroundColor: theme.text }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.background}
                  style={{ backgroundColor: theme.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>
              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.background}
                  style={{ backgroundColor: theme.purple }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </Info>
          </div>
          <img src={heroImage} alt="" />
        </HeroContent>

        <img src={heroBackgroundImage} id="hero-bg" alt="" />
      </HeroContainer>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </>
  )
}
