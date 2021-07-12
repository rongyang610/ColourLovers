import React from 'react'
import styled from 'styled-components'

import Row from 'component/Row'
import Text from 'component/Text'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`

const Header = styled.h1`
  font-weight: ${({ $weight }: HeaderProps) => ($weight ? $weight : 700)};
  margin: 0;
`

const TimerRow = styled(Row)`
  justify-content: flex-end;
  margin-bottom: 8px;
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
