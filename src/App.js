import React, { Component } from 'react';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';

//모든 컴포넌트에 동시 적용할 내용을 설정
createGlobalStyle`
  body{ 
    padding :0;
    margin : 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Button>Hello</Button>
        <Button danger rotationTime={3}>Hello</Button>
        {/* danger --- css를 작성하는 부분으로 넘겨주는 값!!  */}
        <Anchor as="a" href="http://www.google.com">Go to Google</Anchor>
      </Container>
    );
  }
}

//Component naming = styled.<Using Html Tag name>
const Container = styled.div`
  height : 100vh;
  width : 100%;
  background-color : gray;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color : ${props => (props.danger ? "red" : "green")};

  ${props => {
    if(props.danger){
      return css `animation : ${rotation} ${props.rotationTime}s linear infinite`
    }
  }}; 
`;

const Anchor = styled(Button)`
  text-decoration : none;
`;

//Animation 효과를 위해서는??
const rotation = keyframes`
  from {
    transform : rotate(0deg);
  }
  to {
    transform : rotate(360deg);
  }
`;

export default App;
