import React, {useContext, useRef, useState, useReducer} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  PanResponder,
} from 'react-native';
import * as Contexts from 'HighLow/App/Context';
import * as Components from 'HighLow/App/Components';
import LottieView from 'lottie-react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('window');

interface circleItem {
  x: number;
  y: number;
  id: number;
}

export function Roulette() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const [circles, setCircles] = useState<circleItem[]>([]);

  const pan = useRef([{id: 0, animated: new Animated.ValueXY()}]).current;
  console.log({pan});
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        console.log(gestureState.stateID);
        setVisible(true);
        pan.current = [
          ...pan,
          [{id: 1, animated: new Animated.ValueXY()}],
        ];
      },
      onPanResponderMove: Animated.event(
        [null, {dx: pan[0].animated.x, dy: pan[0].animated.y}],
        {
          useNativeDriver: false,
        },
      ),
      onPanResponderRelease: () => {
        setVisible(false);
        pan[0].animated.extractOffset();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [
            {translateX: pan[0].animated.x},
            {translateY: pan[0].animated.y},
          ],
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.circle}>
          <LottieView
            source={require('HighLow/App/Images/Animations/roulette_circle6.json')}
            autoPlay
            loop
            style={styles.lottie}
            speed={1.5}
          />
        </View>
      </Animated.View>
      {/* <Components.mkPanResponder index={1} />
      <Components.mkPanResponder index={2} />
      <Components.mkPanResponder index={3} /> */}
    </View>
  );
}

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
    width: width * 0.5,
    height: width * 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 120,
  },
  lottie: {
    width: '100%',
    height: '100%',
  },
});
