import styled from 'styled-components'
import { typography } from '../../styles/typography'

export const SuccessContainer = styled.main`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;

  max-width: 1160px;
  padding: 80px 20px;
  margin: 0 auto;

  img {
    margin-bottom: -13px;
  }
`

export const Order = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h2 {
    ${typography.titleL};
    color: ${({ theme }) => theme.sutitle};
  }

  span {
    ${typography.textL};
    color: ${({ theme }) => theme.sutitle};
  }
`

export const Info = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.yellow}, ${theme.purple})`};
`

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 40px;
  background-color: white;
  border-radius: 6px 36px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    > svg {
      padding: 8px;
      border-radius: 50%;
    }
  }

  > div div {
    display: flex;
    flex-direction: column;
  }
`
