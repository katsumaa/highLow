// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, {useContext, useRef} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
} from 'react-native';
import * as Contexts from '../../../Context';
// @ts-expect-error TS(2307): Cannot find module '../../Constants/path' or its c... Remove this comment to see the full error message
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <View style={styles.container}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <PanGestureHandler ref={ref} onGestureEvent={onPanGestureEvent}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
