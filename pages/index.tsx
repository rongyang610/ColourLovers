import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Title from 'features/Title'
import useFetch from 'hooks/useFetch'
import timeFormatter from 'utils/timeFormatter'

const COLOUR_API_URL =
  'http://www.colourlovers.com/api/palettes/new?format=json'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1b89d0;
    font-family: Lato;
    color: white;
    font-size: 16px;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Home() {
  const [time, setTime] = useState(timeFormatter(new Date()))
  const { data, loading } = useFetch(COLOUR_API_URL)

  useEffect(() => {
    setTime(timeFormatter(new Date()))
  }, [data])
  return (
    <>
      <Head>
        <title>ColourLover</title>
      </Head>
      <GlobalStyle />
      <Wrapper>
        <Title time={time} />
      </Wrapper>
    </>
  )
}
