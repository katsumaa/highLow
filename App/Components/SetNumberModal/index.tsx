import { COLOR_PALLET } from '../../Constants/colors';
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as Contexts from '../../Context';
import { FONT } from '../../Constants/font';

const { height, width } = Dimensions.get('window');

export function SetNumberModal() {
  const { serUserList } = Contexts.useUserListContext();
  const [number, setNumber] = useState<number>(4);

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <View style={styles.top}>
          <Text>人数選んでもろて</Text>
        </View>
        <View style={styles.middle}>
          <View style={styles.button}></View>
          <Text
            style={FONT.DEFAULT.HIRAGINO_BLACK_55_MEDIUM}
          >
            {number}
          </Text>
        </View>
        <View style={styles.bottom}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: height,
    width: width,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    height: '30%',
    width: '80%',
    backgroundColor: 'skyblue',
    borderRadius: 10,
  },
  top: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    height: '60%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    height: '20%',
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: width * 0.13,
    width: width * 0.13,
    backgroundColor: 'red',
    borderRadius: 50,
  },
});
