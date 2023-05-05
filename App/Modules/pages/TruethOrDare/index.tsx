import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, PanResponder, Animated} from 'react-native';

export function TruethOrDare() {
  const [circles, setCircles] = useState([]);
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return true;
      },
      onPanResponderGrant: (evt, gestureState) => {
        const {x, y} = gestureState;
        setCircles(circles => [...circles, {x, y, id: Date.now()}]);
      },
      onPanResponderMove: (evt, gestureState) => {
        const {x, y} = gestureState;
        setCircles(circles =>
          circles.map(circle => {
            if (circle.id === gestureState.identifier) {
              circle.x = x;
              circle.y = y;
            }
            return circle;
          }),
        );
      },
      onPanResponderRelease: (evt, gestureState) => {
        setCircles(circles =>
          circles.filter(circle => circle.id !== gestureState.identifier),
        );
      },
    }),
  ).current;

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      {circles.map(({x, y, id}) => (
        <Animated.View
          key={id}
          style={[styles.circle, {left: x, top: y}]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    position: 'absolute',
  },
});
