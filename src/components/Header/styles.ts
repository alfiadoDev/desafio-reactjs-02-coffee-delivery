import styled from 'styled-components'
import { typography } from '../../styles/typography'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1160px;
  padding: 32px 20px;
  margin: 0 auto;
`

export const Aside = styled.aside`
  display: flex;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    padding: 10px 8px;
    border-radius: 6px;

    background-color: ${({ theme }) => theme['purple-light']};

    svg {
      color: ${({ theme }) => theme.purple};
    }

    span {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }

  a {
    display: flex;
    align-items: center;

    padding: 8px;
    border-radius: 6px;

    background-color: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};

    position: relative;

    &[aria-disabled='true'] {
      pointer-events: none;
    }

    span {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);

      display: flex;
      align-items: center;
      justify-content: center;

      ${typography.textS}
      font-weight: bold;
      background-color: ${({ theme }) => theme['yellow-dark']};
      color: ${({ theme }) => theme.white};
      border-radius: 50%;
      width: 20px;
      height: 20px;
    }
  }
`
