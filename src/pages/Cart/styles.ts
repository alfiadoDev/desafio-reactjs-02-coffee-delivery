import styled from 'styled-components'
import { typography } from '../../styles/typography'

export const CartContainer = styled.main`
  max-width: 1160px;
  padding: 40px 20px;
  margin: 0 auto;

  display: flex;
  gap: 32px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    ${typography.titleXS}
    color: ${({ theme }) => theme.sutitle};
  }
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 100%;
  min-width: 640px;
  padding: 40px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.card};
`

export const AdressFormContainer = styled(FormContainer)``

const FormHeading = styled.div`
  display: flex;
  gap: 8px;

  svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }

  div {
    span {
      color: ${({ theme }) => theme.sutitle};
    }

    p {
      ${typography.textS}
    }
  }
`

export const AdressFormHeading = styled(FormHeading)``

export const AdressForm = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 60px;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-gap: 16px 12px;
`

export const PaymentContainer = styled(FormContainer)``

export const PaymentHeading = styled(FormHeading)`
  svg {
    color: ${({ theme }) => theme['purple-dark']};
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
`

export const PaymentErrorMessage = styled.p`
  ${typography.textXS};
  font-weight: 400;
  color: red;
`

export const CoffeeContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: stretch;
    gap: 20px;

    > img {
      width: 64px;
      height: 64px;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 8px;

  > button {
    display: flex;
    align-items: center;
    gap: 8px;

    padding: 6px 8px;
    background-color: ${({ theme }) => theme.button};
    border-radius: 6px;

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.hover};
    }

    svg {
      color: ${({ theme }) => theme.purple};
    }

    span {
      ${typography.buttonM}
      text-transform: uppercase;
      color: ${({ theme }) => theme.text};
    }
  }
`

export const CartTotal = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 6px 36px;
  width: 100%;
  min-width: 448px;

  > span {
    display: block;
    height: 1px;
    background-color: ${({ theme }) => theme.button};
    margin: 24px 0;
  }
`

export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${typography.textS};
    }

    span:last-child {
      ${typography.textM};
    }
  }

  div:last-child {
    span {
      ${typography.textL};
      font-weight: bold;
    }
  }
`

export const CheckoutButton = styled.button`
  margin-top: 24px;
  width: 100%;
  padding: 12px;
  text-transform: uppercase;

  ${typography.buttonG};
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.yellow};
  border-radius: 6px;

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }
`
