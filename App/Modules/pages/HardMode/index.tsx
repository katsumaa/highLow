// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  Dimensions,
  TouchableOpacity,
  Settings,
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
} from 'react-native';
import {
  HIGHLOW,
  SETTINGS,
  SEVENHEAVEN,
  HOME,
  RESULT,
} from '../../../Constants/path';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export function HardMode({
  navigation
}: any) {
  const [buttonCount, setButtonCount] = useState(0);
  function changeHardMode({
    navigation
  }: any) {
    console.log(buttonCount);
    if (buttonCount >= 3) {
      return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <View style={styles.image}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TouchableOpacity onPress={() => navigation.navigate(HOME)}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Image
              source={require('../../../Images/shot.png')}
              resizeMode="contain"
              style={{height: height * 0.07, width: width * 0.07}}
            />
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <View style={styles.image}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TouchableOpacity
            onPress={() => {
              setButtonCount(buttonCount + 1);
            }}
          >
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Image
              source={require('../../../Images/shot.png')}
              resizeMode="contain"
              style={{height: height * 0.07, width: width * 0.07}}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <View style={styles.container}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <View style={styles.blankTopHeader} />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <TouchableOpacity onPress={() => navigation.navigate(HIGHLOW)}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <View style={styles.view}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Text style={styles.text}>HighLow</Text>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Text style={styles.reverseText}>HighLow</Text>
        </View>
      </TouchableOpacity>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <TouchableOpacity onPress={() => navigation.navigate(SEVENHEAVEN)}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <View style={styles.view}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Text style={styles.text}>King's Cup</Text>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Text style={styles.reverseText}>King's Cup</Text>
        </View>
      </TouchableOpacity>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <TouchableOpacity onPress={() => navigation.navigate(RESULT)}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <View style={styles.view}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Text style={styles.text}>OJISAN</Text>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Text style={styles.reverseText}>OJISAN</Text>
        </View>
      </TouchableOpacity>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <TouchableOpacity onPress={() => navigation.navigate(RESULT)}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <View style={styles.view}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Text style={styles.text}>Trueth or Dare</Text>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Text style={styles.reverseText}>Trueth or Dare</Text>
        </View>
      </TouchableOpacity>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <TouchableOpacity onPress={() => navigation.navigate(SETTINGS)}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <View style={styles.view}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Text style={styles.text}>Settings</Text>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Text style={styles.reverseText}>Settings</Text>
        </View>
      </TouchableOpacity>
      {changeHardMode({navigation})}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // @ts-expect-error TS(1117): An object literal cannot have multiple properties ... Remove this comment to see the full error message
    backgroundColor: '#004098',
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
    height: height * 0.05,
    width: width,
    color: 'white',
    fontSize: height * 0.05,
    fontFamily: 'AppleSDGothicNeo-UltraLight',
    textAlign: 'center',
  },
  reverseText: {
    height: '50%',
    width: '100%',
    transform: [{rotateX: '180deg'}],
    color: 'white',
    fontSize: height * 0.05,
    fontFamily: 'AppleSDGothicNeo-UltraLight',
    opacity: 0.14,
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
