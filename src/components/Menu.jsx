import React from 'react'
import FakeTube from "../images/logo.png"
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  height: 100vh;
  background-color: #202020;
  color: white;
  font-size: 14px;

`
const Wrapper=styled.div`
  padding: 18px 25px;
  
`
const Logo=styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  font-weight: bold;
  margin-bottom: 25px;

`

const Img=styled.img`
  height: 2.5rem;
`
const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={FakeTube}/>
          FakeTube
        </Logo>
      </Wrapper>
      
    </Container>
  )
}

export default Menu
