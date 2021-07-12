import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = ({ time }: TitleProps) => {
  return (
    <Wrapper>
      <div>Last Updated at {time}</div>
      <div>
        <div>ColourLovers. Live.</div>
      </div>
    </Wrapper>
  )
}

type TitleProps = {
  time: string
}

export default Title
