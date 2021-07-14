import styled from 'styled-components'

const Text = styled.span`
  font-size: ${({ $size }: TextProps) => ($size ? $size : '16px')};
  font-weight: ${({ $weight }) => ($weight ? $weight : 300)};
`

type TextProps = {
  $size?: string
  $weight?: number
}

export default Text
