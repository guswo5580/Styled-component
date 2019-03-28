import React, { Component } from 'react';
import styled, { createGlobalStyle, css, keyframes , ThemeProvider} from 'styled-components';
import theme from './theme';

//모든 컴포넌트에 동시 적용할 내용을 설정
createGlobalStyle`
  body{ 
    padding :0;
    margin : 0;
  }
`;
const MixinPart = css`
  box-shadow : 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0,0,0,0.00);
  background-color : white;
  border-radius : 10px;
  padding : 20px;
`;

const Second = styled.div`
  margin-top : 30px;
  ${MixinPart};
  background-color : ${props => props.theme.mainColor};
`;
const Input = styled.input.attrs({
  required : true,
  placeholder : 'hello'
})`
  border-radius : 5px;
`;

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

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Button>Hello</Button>
          <Button danger rotationTime={3}>Hello</Button>
          {/* danger --- css를 작성하는 부분으로 넘겨주는 값!!  */}
          <Anchor as="a" href="http://www.google.com">Go to Google</Anchor>
          <Form></Form>
        </Container>
      </ThemeProvider>
    );
  }
}


const Form = () => (
  <Second>
    <Input></Input>
  </Second>
);





export default App;
