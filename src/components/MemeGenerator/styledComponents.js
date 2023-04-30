// Style your components here
import styled from 'styled-components'

export const Heading = styled.h1`
  color: #35469c;
  font-size: 30px;
`

export const LabelElement = styled.label`
  font-size: 12px;
  color: #5a7184;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const InputElement = styled.input`
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const ButtonElement = styled.button`
  background-color: blue;
  color: white;
  padding: 20px;
  border-radius: 5px;
  margin-top: 50px;
`

export const Container = styled.div`
  background-image: url(${props => props.backgroundUrl});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  width: 200px;
  background-size: cover;
  align-items: center;
`

export const Paragraph = styled.p`
  color: white;
  font-size: ${props => props.fontSize}px;
`
