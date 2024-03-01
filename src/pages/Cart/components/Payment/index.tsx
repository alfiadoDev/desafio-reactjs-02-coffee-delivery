import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'
import { PaymentContainer } from './styles'

interface PaymentProps extends InputHTMLAttributes<HTMLInputElement> {
  isSelected: boolean
}

export const Payment = forwardRef(function MyPayment(
  { children, isSelected, ...rest }: PaymentProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <PaymentContainer $state={isSelected}>
      <input type="radio" ref={ref} {...rest} />
      {children}
    </PaymentContainer>
  )
})
