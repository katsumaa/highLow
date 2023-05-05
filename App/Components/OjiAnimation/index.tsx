import React, {
  useEffect,
  Dispatch,
  ReactElement,
  SetStateAction,
  useRef,
} from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Animated,
} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

const {height, width} = Dimensions.get('window');

type Props = {
  animationVisible: boolean;
  setAnimationVisible: Dispatch<SetStateAction<boolean>>;
  resetOjiIcons: () => void;
};

export function OjiAnimation(props: Props) {
  const {animationVisible, setAnimationVisible, resetOjiIcons} = props;

  const animatedValue = useRef(new Animated.Value(0)).current;
  const interPolateHeight = animatedValue.interpolate({
    inputRange: [0, 75, 150],
    outputRange: [height * 0.1, height * 1.5, height * 0.65],
  });

  useEffect(() => {
    animationVisible &&
      Animated.timing(animatedValue, {
        toValue: 150,
        duration: 400,
        useNativeDriver: false,
      }).start();
  }, [animationVisible]);

  const animatedHeight = {
    height: interPolateHeight,
  };

  return (
    <>
      {animationVisible && (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.touchableContainer}
            onPress={() => {
              setAnimationVisible(false);
              animatedValue.setValue(0);
              resetOjiIcons();
            }}
          >
            <Animated.Image
              style={[styles.image, animatedHeight]}
              resizeMode={'cover'}
              source={require('HighLow/App/Images/OjiIcons/Ojisan.png')}
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height,
    width,
    zIndex: 2,
  },
  image: {
    height,
    width,
  },
  touchableContainer: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
