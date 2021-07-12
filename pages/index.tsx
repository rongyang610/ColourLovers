import React from 'react'
import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'
import useFetch from 'hooks/useFetch'

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
  const { data, loading } = useFetch(COLOUR_API_URL)
  console.log({ data, loading })
  return (
    <>
      <Head>
        <title>ColourLover</title>
      </Head>
      <GlobalStyle />
      <Wrapper></Wrapper>
    </>
  )
}
