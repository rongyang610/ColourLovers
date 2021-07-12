import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Title from 'features/Title'
import useFetch from 'hooks/useFetch'
import timeFormatter from 'utils/timeFormatter'
import Colours from 'features/Colours'

const COLOUR_API_URL =
  'http://www.colourlovers.com/api/palettes/new?format=json'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1b89d0;
    font-family: Lato;
    color: white;
    font-size: 16px;
  }

  h1 {
    font-size: 64px;
    font-weight: 700;
    margin: 16px 0;
  }

  h2 {
    font-size: 28px;
    font-weight: 700;
    margin: 8px 0;
  }

  a{
    color: white;
    text-decoration: none;

    &:hover {
      color: white;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    h1{
      font-size: 48px;
    }
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;
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
        <Colours data={data} loading={loading} />
      </Wrapper>
    </>
  )
}
