import { Check, ShoppingCart } from 'phosphor-react'
import {
  CoffeeCardContainer,
  Description,
  Footer,
  Order,
  Price,
  Tags,
  Title,
} from './styles'
import { QuantityInput } from '../Form/QuantityInput'
import { useTheme } from 'styled-components'
import { useState } from 'react'
import { useCart } from '../../../../hooks/useCart'

interface CoffeeCardProps {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)

  const { addItem } = useCart()

  const theme = useTheme()

  function incrementQuantity() {
    setQuantity((oldState) => oldState + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) setQuantity((oldState) => oldState - 1)
  }

  function handleAddItem() {
    addItem({ id: coffee.id, quantity })
    setIsItemAdded(true)
    setQuantity(1)
  }

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt={coffee.title} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>

      <Footer>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>

        <Order $itemAdded={isItemAdded}>
          <QuantityInput
            quantity={quantity}
            incrimentQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <Check weight="fill" size={22} color={theme.card} />
            ) : (
              <ShoppingCart size={22} color={theme.card} />
            )}
          </button>
        </Order>
      </Footer>
    </CoffeeCardContainer>
  )
}
