import React from 'react';
import {View, Text} from 'react-native';
import arraytest from '../arraytest';


const Home = () => {
  const list = () => {
    return arraytest.map((element) => {
      return (
        <View key={element.key} style={{margin: 10}}>
          <Text>{element.title}</Text>
          <Text>{element.subtitle}</Text>
        </View>
      );
    });
  };

  return <View>{list()}</View>;
};

export default Home;