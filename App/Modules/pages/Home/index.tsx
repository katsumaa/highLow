import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  Dimensions,
  TouchableOpacity,
  Settings,
} from 'react-native';
import {
  HIGHLOW,
  SETTINGS,
  SEVENHEAVEN,
  HARDMODE,
  RESULT,
  ROULETTE,
  OJISAN,
} from '../../../Constants/path';
import { defaultUserList } from '../../../Constants/defaultUserList';
import * as Components from '../../../Components';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export function Home({ navigation }: any) {
  const [buttonCount, setButtonCount] = useState(0);
  const [userList, setUserList] = useState(defaultUserList);

  function changeHardMode({ navigation }: any) {
    if (buttonCount >= 3) {
      return (
        <View style={styles.image}>
          <TouchableOpacity
            onPress={() => (
              navigation.navigate(HARDMODE),
              setButtonCount(0)
            )}
          >
            <Image
              source={require('../../../Images/shot.png')}
              resizeMode="contain"
              style={{
                height: height * 0.07,
                width: width * 0.07,
              }}
            />
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.image}>
          <TouchableOpacity
            onPress={() => {
              setButtonCount(buttonCount + 1);
            }}
          >
            <Image
              source={require('../../../Images/shot.png')}
              resizeMode="contain"
              style={{
                height: height * 0.07,
                width: width * 0.07,
              }}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.blankTopHeader} />
      <TouchableOpacity
        onPress={() => navigation.navigate(HIGHLOW)}
      >
        <View style={styles.view}>
          <Text style={styles.text}>HighLow</Text>
          <Text style={styles.reverseText}>HighLow</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(SEVENHEAVEN)}
      >
        <View style={styles.view}>
          <Text style={styles.text}>King's Cup</Text>
          <Text style={styles.reverseText}>King's Cup</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(OJISAN)}
      >
        <View style={styles.view}>
          <Text style={styles.text}>OJISAN</Text>
          <Text style={styles.reverseText}>OJISAN</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(ROULETTE)}
      >
        <View style={styles.view}>
          <Text style={styles.text}>Roulette</Text>
          <Text style={styles.reverseText}>Roulette</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(RESULT)}
      >
        <View style={styles.view}>
          <Text style={styles.text}>Trueth or Dare</Text>
          <Text style={styles.reverseText}>
            Trueth or Dare
          </Text>
        </View>
      </TouchableOpacity>
      {/*}
      <TouchableOpacity onPress={() => navigation.navigate(SETTINGS)}>
        <View style={styles.view}>
          <Text style={styles.text}>Settings</Text>
          <Text style={styles.reverseText}>Settings</Text>
        </View>
      </TouchableOpacity>
  {*/}
      {changeHardMode({ navigation })}
      <Components.SetNumberModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#464646',
  },
  blankTopHeader: {
    height: height * 0.1,
    width: width,
  },
  view: {
    height: height * 0.1,
    width: width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.05,
  },
  text: {
    height: '50%',
    width: '100%',
    color: 'white',
    fontSize: height * 0.05,
    fontFamily: 'AppleSDGothicNeo-UltraLight',
    textAlign: 'center',
  },
  reverseText: {
    height: '50%',
    width: '100%',
    transform: [{ rotateX: '180deg' }],
    color: 'white',
    fontSize: height * 0.05,
    fontFamily: 'AppleSDGothicNeo-UltraLight',
    fontStyle: 'italic',
    opacity: 0.1,
    textAlign: 'center',
  },
  image: {
    width: width * 0.9,
    height: height * 0.13,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  touchableOpacity: {
    height: '100%',
    width: '100%',
  },
});
