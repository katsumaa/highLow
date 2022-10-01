import React, {useContext, useRef, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  FlatList,
} from 'react-native';
import * as Contexts from '../../../Context';
import {HOME} from '../../Constants/path';
import {
  PanGestureHandler,
  TouchableOpacity,
} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('window');
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
  const renderImage = item => {
    console.log(item);
    return (
      <View style={styles.imageBox}>
        <TouchableOpacity>
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Drink if you missed</Text>
      </View>
      <View style={styles.middle}>
        <FlatList
          data={data}
          renderItem={renderImage}
          keyExtractor={item => item.id}
          horizontal={false}
          numColumns={4}
        />
      </View>
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
