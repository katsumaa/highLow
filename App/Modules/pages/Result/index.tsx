import React, {useContext} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';
import * as Contexts from '../../../Context';

import {HOME} from '../../Constants/path';

const {height, width} = Dimensions.get('window');

export function Result() {
  const {userList} = Contexts.useUserListContext();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Result</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.contentBox}>
          <View style={styles.rankBox}>
            <Image source={require('../../../Images/crown.png')} />
          </View>
          <View style={styles.userBox}>
            <Image />
          </View>
          <View style={styles.countBox}></View>
        </View>
      </View>
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
    height: '10%',
    width: '90%',
    marginTop: '5%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  content: {
    height: '85%',
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '10%',
  },
  contentBox: {
    height: '13%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  rankBox: {
    height: '80%',
    width: '25%',
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userBox: {
    height: '80%',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  countBox: {
    height: '80%',
    width: '25%',
    backgroundColor: 'blue',
  },
  titleText: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'AppleSDGothicNeo-UltraLight',
  },
});
