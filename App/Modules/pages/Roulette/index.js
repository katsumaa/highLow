import React, {useContext, useRef} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
} from 'react-native';
import * as Contexts from '../../../Context';
import {HOME} from '../../Constants/path';
import {PanGestureHandler} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('window');

export function Roulette() {
  const ref = useRef();
  const onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: ref.translateX,
          translationY: ref.translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );
  return (
    <View style={styles.container}>
      <PanGestureHandler ref={ref} onGestureEvent={onPanGestureEvent}>
        <Animated.View
          style={[
            styles.circle,
            {
              transform: [
                {
                  translateX: ref.translateX,
                },
                {
                  translateY: ref.translateY,
                },
              ],
            },
          ]}
        />
      </PanGestureHandler>
    </View>
  );
}

function mkImage() {}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#464646',
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'gray',
  },
});
