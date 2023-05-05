import React, {useContext, useRef, useState} from 'react';
import LottieView from 'lottie-react-native';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  PanResponder,
} from 'react-native';

const {height, width} = Dimensions.get('window');

type Props = {
  index: number;
};

export function mkPanResponder(props: Props) {
  const {index} = props;
  const ref = useRef();

  const images = [
    require('HighLow/App/Images/Animations/roulette_circle1.json'),
    require('HighLow/App/Images/Animations/roulette_circle2.json'),
    require('HighLow/App/Images/Animations/roulette_circle3.json'),
    require('HighLow/App/Images/Animations/roulette_circle4.json'),
    require('HighLow/App/Images/Animations/roulette_circle5.json'),
    require('HighLow/App/Images/Animations/roulette_circle6.json'),
  ];

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {},
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;
  return (
    <Animated.View
      style={{
        transform: [{translateX: pan.x}, {translateY: pan.y}],
      }}
      {...panResponder.panHandlers}
    >
      <View style={styles.circle}>
        <LottieView
          source={images[index]}
          autoPlay
          loop
          style={styles.lottie}
          speed={1.5}
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: width * 0.5,
    height: width * 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 120,
    backgroundColor: 'white',
  },
  lottie: {
    width: '100%',
    height: '100%',
  },
});
