/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { typography } from '../../../../styles/typography'

export const CoffeeCardContainer = styled.div`
  background-color: ${({ theme }) => theme.card};
  padding: 0 20px 20px;
  border-radius: 6px 36px;
  width: 256px;

  display: flex;
  flex-direction: column;

  text-align: center;

  > img {
    margin-top: -20px;
    max-width: 120px;
    max-height: 120px;
    align-self: center;
  }
`

export const Tags = styled.div`
  margin-top: 12px;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
    text-transform: uppercase;
    ${typography.tag}
  }
`

export const Title = styled.h3`
  margin-top: 16px;

  color: ${({ theme }) => theme.sutitle};
  ${typography.titleS}
`

export const Description = styled.span`
  margin-top: 8px;
  width: 100%;

  color: ${({ theme }) => theme.label};
  ${typography.textS}
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    ${typography.textS};
    color: ${({ theme }) => theme.text};
  }

  span:last-child {
    ${typography.titleM};
    color: ${({ theme }) => theme.text};
  }
`

export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    background-color: ${({ theme, $itemAdded }) =>
    $itemAdded ? theme['yellow-dark'] : theme['purple-dark']};
    border-radius: 6px;
    padding: 8px;

    display: flex;

    transition: background-color 0.2s;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
    $itemAdded ? theme.yellow : theme.purple};
    }
  }
`
