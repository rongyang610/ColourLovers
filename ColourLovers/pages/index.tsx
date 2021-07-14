import { GetServerSideProps } from 'next'
import Head from 'next/head'
import fetch from 'node-fetch'
import React, { useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Colours from 'features/Colours'
import Title from 'features/Title'
import useFetch from 'hooks/useFetch'
import { ApiColorType } from 'types'
import timeFormatter from 'utils/timeFormatter'

const COLOUR_API_URL =
  'http://www.colourlovers.com/api/palettes/new?format=json'
const TIMER = 60000

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

export default function Home({ isLoading, ssData }: PropTypes) {
  const [time, setTime] = useState(timeFormatter(new Date()))
  const { data } = useFetch('/api/', TIMER, ssData)

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
        <Colours data={data || ssData} isLoading={isLoading && !data} />
      </Wrapper>
    </>
  )
}

type PropTypes = {
  isLoading?: boolean
  ssData?: Array<ApiColorType>
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  console.log('hello')
  try {
    const response = await fetch(COLOUR_API_URL, {
      headers: { 'User-Agent': 'ColourLoversLive' }
    })
    const ssData = await response.json()
    return { props: { ssData } }
  } catch (e) {
    res.statusCode = 404
    return { props: { isLoading: true } }
  }
}
