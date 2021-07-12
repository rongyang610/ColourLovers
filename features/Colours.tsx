import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import Loader from 'components/Loader'
import Row from 'components/Row'
import Text from 'components/Text'
import timeFormatter from 'utils/timeFormatter'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const Container = styled(Row)`
  padding: 10px;
  max-width: 460px;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  max-width: 50%;
  width: 100%;
`
const Header = styled.h2`
  font-weight: 400;
  margin: 0;
`
const CustomLink = styled.a`
  width: 100%;
`
const ViewsContainer = styled(Row)`
  background-color: #1d76ae;
  border-radius: 2px;
  margin-top: 8px;
  padding: 8px 4px;
  width: fit-content;

  & span:first-child {
    margin-right: 8px;
  }
`

const ColourRender = (data: Array<ApiColorType>) =>
  data.map(
    ({
      dateCreated,
      id,
      imageUrl,
      numViews,
      numVotes,
      title,
      url,
      userName
    }: ApiColorType) => (
      <Container key={id}>
        <CustomLink href={url} target="_blank">
          <Row>
            <TextContainer>
              <Header>{title}</Header>
              <Text>
                by {userName} at {timeFormatter(dateCreated)}
              </Text>
              <ViewsContainer>
                <Text $size="12px" $weight={700}>
                  {numViews} views
                </Text>
                <Text $size="12px" $weight={700}>
                  {numVotes} votes
                </Text>
              </ViewsContainer>
            </TextContainer>
            <Image
              alt={title}
              height="100"
              src={imageUrl}
              width="180"
              layout="fixed"
            />
          </Row>
        </CustomLink>
      </Container>
    )
  )

const Colours = ({ data, loading }: PropType) => (
  <Wrapper>{loading ? <Loader /> : data && ColourRender(data)}</Wrapper>
)

type PropType = {
  data?: Array<ApiColorType>
  loading: boolean
}

type ApiColorType = {
  apiUrl: string
  badgeUrl: string
  colors: Array<string>
  dateCreated: Date
  description: string
  id: number
  imageUrl: string
  numComments: number
  numHearts: number
  numViews: number
  numVotes: number
  rank: number
  title: string
  url: string
  userName: string
}

export default Colours
