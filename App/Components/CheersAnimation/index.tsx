import React, {Dispatch, ReactElement, SetStateAction} from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

const {height, width} = Dimensions.get('window');

type Props = {
  drinkCount: number;
  setDrinkCount: Dispatch<SetStateAction<number>>;
};

export function CheersAnimations(props: Props): ReactElement {
  const {drinkCount, setDrinkCount} = props;
  return (
    <>
      {drinkCount !== 0 && (
        <View style={styles.drinkImageView}>
          <View style={styles.drinkImageText}>
            <Text style={{fontSize: height * 0.05, color: 'red'}}>
              {drinkCount} Shot!
            </Text>
          </View>
          <AnimatedLoader
            visible={true}
            source={require('../../Images/Animations/cheers.json')}
            animationStyle={styles.lottie}
            speed={1}
            loop={false}
            overlayColor="rgba(0,0,0,0)"
          >
            <TouchableOpacity
              onPress={() => {
                setDrinkCount(0);
              }}
              style={styles.drinkImageTouchable}
            ></TouchableOpacity>
          </AnimatedLoader>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  drinkImageView: {
    position: 'absolute',
    height,
    width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    zIndex: 5,
  },
  lottie: {
    width: '100%',
    height: height * 0.4, //'100%',
  },
  drinkImageTouchable: {
    position: 'absolute',
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  drinkImageText: {
    position: 'absolute',
    height: height * 0.05,
    width: width,
    top: height * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
