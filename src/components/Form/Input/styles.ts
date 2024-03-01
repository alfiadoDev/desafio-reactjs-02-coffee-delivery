import styled from 'styled-components'
import { typography } from '../../../styles/typography'

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const InputContainer = styled.div<{ $state: 'focused' | 'blurred' }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.button};

  background-color: ${({ theme }) => theme.input};

  transition: all 0.2s;

  border-color: ${({ theme, $state }) =>
    $state === 'focused' ? theme['yellow-dark'] : theme.button};

  input {
    color: ${({ theme }) => theme.text};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 12px;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.label};
    }
  }

  span {
    color: ${({ theme }) => theme.label};
    padding-right: 12px;
    ${typography.textS};
    font-style: italic;
  }
`

export const ErrorMessage = styled.p`
  ${typography.textS};
  font-weight: 400;
  color: red;
`
