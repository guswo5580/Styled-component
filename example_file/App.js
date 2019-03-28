import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

//styled-components 로 작성하는 부분 
const Container = styled.View`
  flex : 1;
  justify-content : center;
  align-items : center;
`;

const Title = styled.Text`
  font-weight : 600;
  font-size : 30px;
`;

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View>
      <Container>
        <Title>hello</Title>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
