// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
// @ts-expect-error TS(2307): Cannot find module '../../../Constants/path' or it... Remove this comment to see the full error message
import {HOME} from '../../../Constants/path';
import * as Contexts from '../Context';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export function PlayerTurn() {
  const {userList} = Contexts.useUserListContext();
  const focusedUser = userList.find(e => e.turnFocus);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={focusedUser.image}
        resizeMode="contain"
      />
      <Text style={styles.text}> 's turn</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width * 0.7,
    height: height * 0.09,
    top: height * 0.055,
    left: width * 0.05,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '15%',
  },
  text: {
    color: 'black',
    fontSize: height * 0.03,
    fontFamily: 'AppleSDGothicNeo-Bold',
    // @ts-expect-error TS(1117): An object literal cannot have multiple properties ... Remove this comment to see the full error message
    color: 'white',
  },
});
