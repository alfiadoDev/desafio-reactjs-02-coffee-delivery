/* eslint-disable @typescript-eslint/no-unused-vars */
import { Minus, Plus } from 'phosphor-react'
import { QuantityInputContainer } from './styles'

interface QuantityInputProps {
  quantity: number
  incrimentQuantity: () => void
  decrementQuantity: () => void
}

export function QuantityInput({
  quantity,
  incrimentQuantity,
  decrementQuantity,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <button onClick={decrementQuantity}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={incrimentQuantity}>
        <Plus size={14} />
      </button>
    </QuantityInputContainer>
  )
}
