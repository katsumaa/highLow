// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, {useContext, useRef, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  FlatList,
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
} from 'react-native';
import * as Contexts from '../../../Context';
// @ts-expect-error TS(2307): Cannot find module '../../Constants/path' or its c... Remove this comment to see the full error message
import {HOME} from '../../Constants/path';
import {
  PanGestureHandler,
  TouchableOpacity,
} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('window');
// @ts-expect-error TS(2613): Module '"/Users/user/work/highLow/App/Constants/oj... Remove this comment to see the full error message
import OJI_DEFAULT from '../../../Constants/oji';

console.log('ojidefault', OJI_DEFAULT);

/*
function renderImage() {
  return (
    <View style={styles.imageBox}>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={require('require('../../../Images/OjiIcons/Ojisan.png')}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
    </View>
  );
}
*/

export function Ojisan() {
  const [data, setData] = useState();
  //console.log('data', OJI_DEFAULT);
  const renderImage = (item: any) => {
    console.log(item);
    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <View style={styles.imageBox}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TouchableOpacity>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Image
            style={styles.image}
            source={item.item.url}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <View style={styles.container}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <View style={styles.header}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Text>Drink if you missed</Text>
      </View>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <View style={styles.middle}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <FlatList
          data={data}
          renderItem={renderImage}
          keyExtractor={(item: any) => item.id}
          horizontal={false}
          numColumns={4}
        />
      </View>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <View style={styles.bottom}></View>
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
  header: {
    height: '20%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  middle: {
    height: '60%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottom: {
    height: '20%',
    width: '100%',
    backgroundColor: 'skyblue',
  },
  imageBox: {
    height: width * 0.29,
    width: width * 0.24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: width * 0.23,
    width: width * 0.23,
  },
});
