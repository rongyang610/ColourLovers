import React from 'react'
import styled from 'styled-components'

import Row from 'components/Row'
import Text from 'components/Text'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const Header = styled.h1`
  font-weight: ${({ $weight }: HeaderProps) => ($weight ? $weight : 700)};
  margin: 0;

  @media (max-width: 768px) {
    & > span {
      font-size: 48px;
    }
  }
`

const TimerRow = styled(Row)`
  justify-content: flex-end;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin: 4px 0 0;
  }
`

const Title = ({ time }: TitleProps) => {
  return (
    <Wrapper>
      <TimerRow>
        <Text $size="14px" $weight={700}>
          Last Updated at {time}
        </Text>
      </TimerRow>
      <Row>
        <Header $weight={300}>
          ColourLovers.{' '}
          <Text $size="64px" $weight={700}>
            Live.
          </Text>
        </Header>
      </Row>
    </Wrapper>
  )
}

type HeaderProps = {
  $weight?: number
}
type TitleProps = {
  time: string
}

export default Title
