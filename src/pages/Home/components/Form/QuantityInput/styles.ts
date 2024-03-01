import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  display: flex;
  gap: 4px;

  padding: 8px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.button};

  button {
    display: flex;
    align-items: center;

    background-color: transparent;
  }

  button svg {
    color: ${({ theme }) => theme.purple};

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }

  span {
    padding-top: 2px;
    color: ${({ theme }) => theme.title};
  }
`
