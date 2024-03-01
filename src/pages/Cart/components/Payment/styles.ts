import styled from 'styled-components'
import { typography } from '../../../../styles/typography'

export const PaymentContainer = styled.label<{ $state: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;

  width: 100%;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${({ theme, $state }) =>
    $state ? theme['purple-light'] : theme.button};
  color: ${({ theme, $state }) => ($state ? theme.purple : theme.text)};
  text-transform: uppercase;
  ${typography.buttonM}

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.purple};
  }
`
