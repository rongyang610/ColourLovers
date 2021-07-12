import React from 'react'
import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'

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
