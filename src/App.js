import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

//모든 컴포넌트에 동시 적용할 내용을 설정
injectGlobal`
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
        <Button danger>Hello</Button>
        {/* danger --- css를 작성하는 부분으로 넘겨주는 값!!  */}
        <Anchor src="http://google.com">Go to Google</Anchor>
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
  border-radius = :50px;
  padding :5px;
  min-width : 120px;
  color : white;
  font-weight : 600;
  cursor : pointer;
  &:active,
  &:focus {
    outline : none;
  }
  background-color : ${props => (props.danger ? "green" : "red")};
`;

//Anchor 는 Button의 성질 그대로에서 Html 속성 a 태그를 추가한다 
//extend 는 Button에 정의한 속성 그대로에서 새로운 css를 추가한다
const Anchor = Button.withComponent('a').extend`
  text-decoration : none;
`;

export default App;
