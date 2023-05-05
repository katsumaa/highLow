// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, {useContext, useRef, useState, useEffect} from 'react';
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
import {TouchableOpacity} from 'react-native-gesture-handler';
import {OjiAnimation} from 'HighLow/App/Components';
import Sound from 'react-native-sound';

const {height, width} = Dimensions.get('window');

Sound.setCategory('Playback');

export function Ojisan() {
  const [data, setData] = useState();
  const [animationVisible, setAnimationVisible] = useState(false);
  const soundUrls = [
    require('HighLow/App/Sound/oji_wrong.mp3'),
    require('HighLow/App/Sound/oji_right_1.mp3'),
    require('HighLow/App/Sound/oji_right_2.mp3'),
    require('HighLow/App/Sound/oji_right_3.mp3'),
  ];
  const hitSound = new Sound(soundUrls[0]);
  const unhitSound1 = new Sound(soundUrls[1]);
  const unhitSound2 = new Sound(soundUrls[2]);
  const unhitSound3 = new Sound(soundUrls[3]);

  const resetOjiIcons = () => {
    const ojiList = [];
    const hitIndex = Math.floor(Math.random() * 16);
    for (let i = 0; i < 16; i++) {
      ojiList.push({
        id: i,
        url: require('HighLow/App/Images/OjiIcons/Ojisan.png'),
        hit: i === hitIndex,
        visible: true,
      });
    }
    setData(ojiList);
  };

  function playSound(item) {
    if (!item.hit) {
      switch (item.id % 3) {
        case 0:
          unhitSound1.play();
          break;
        case 1:
          unhitSound2.play();
          break;
        case 2:
          unhitSound3.play();
          break;
        default:
          break;
      }
    } else {
      hitSound.play();
    }
  }

  useEffect(() => {
    hitSound.release();
    unhitSound1.release();
    unhitSound2.release();
    unhitSound3.release();
    resetOjiIcons();
  }, []);

  const onPress = index => {
    const newData = data.map(e =>
      e.id === index ? {...e, visible: false} : e,
    );
    setData(newData);
    playSound(data[index]);
    data[index].hit && setAnimationVisible(true);
  };

  const renderImage = (item: any) => {
    return (
      <View style={styles.imageBox}>
        <TouchableOpacity
          onPress={() => {
            onPress(item.index);
          }}
        >
          {item.item.visible && (
            <Image
              style={styles.image}
              source={item.item.url}
              resizeMode={'contain'}
            />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <OjiAnimation
        animationVisible={animationVisible}
        setAnimationVisible={setAnimationVisible}
        resetOjiIcons={resetOjiIcons}
      />
      <View style={styles.header}>
        <Text>ここに何か書く？</Text>
      </View>
      <View style={styles.middle}>
        <FlatList
          data={data}
          renderItem={renderImage}
          keyExtractor={(item: any) => item.id}
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
  },
  imageBox: {
    height: width * 0.28,
    width: width * 0.24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: width * 0.23,
    width: width * 0.23,
  },
});
