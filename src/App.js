import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const Container =styled.div`
display:flex;
`

const Main=styled.div`
flex: 7;
`

const Wrapper=styled.div`

`

function App() {
  return (
    <Container>
     <Menu />

     <Main>
      <Navbar/>

      <Wrapper>
        <h1>play card</h1>
        
        <h1>play card</h1>
        <h1>play card</h1>
        <h1>play card</h1>
        <h1>play card</h1>
        <h1>play card</h1>
        <h1>play card</h1>
        <h1>play card</h1>
        <h1>play card</h1>
        <h1>play card</h1>
        <h1>play card</h1>
        <h1>play card</h1>
        <h1>play card</h1>
        <h1>play card</h1>
        <h1>play card</h1>
        <h1>play card</h1>
        <h1>play card</h1>
        <h1>play card</h1>
        Video Cards
      </Wrapper>
      </Main> 
      
    </Container>
  );
}

export default App;
