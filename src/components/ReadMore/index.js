// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  InnerContainer,
  ReactHooksHeading,
  ReactText,
  Container,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [read, setRead] = useState(false)

  const onToggleButton = () => setRead(prevState => !prevState)

  return (
    <MainContainer>
      <InnerContainer>
        <ReactHooksHeading>React Hooks</ReactHooksHeading>
        <ReactText>Hooks are a new addition to React</ReactText>
        <Container>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
            alt="react hooks"
          />
          <Description>
            {reactHooksDescription.slice(0, 170)}
            {read && reactHooksDescription.slice(170)}
          </Description>
          <Button onClick={onToggleButton}>
            {read ? 'Read Less' : 'Read More'}
          </Button>
        </Container>
      </InnerContainer>
    </MainContainer>
  )
}

export default ReadMore
