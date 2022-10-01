// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import {Dimensions, Stylesheet, View, Text, Animated} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function AlcCountUpAnimation() {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <View style={Stylesheet.container}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Text>+1</Text>
    </View>
  );
}

const style = Stylesheet.create({
  container: {
    position: 'absolute',
    height: height / 8,
    width: width / 3,
  },
  Text: {
    color: 'black',
    fontSize: '20',
  },
});
