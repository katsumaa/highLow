import React from 'react';
import {Dimensions, Stylesheet, View, Text, Animated} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function AlcCountUpAnimation(){
  return(
    <View style={Stylesheet.container}>
      <Text>+1</Text>
    </View>
  )
};

const style = Stylesheet.create({
  container: {
    position: 'absolute',
    height: height / 8,
    width: width / 3,
  },
  Text: {
    color: 'black',
    fontSize: '20',
  }
})