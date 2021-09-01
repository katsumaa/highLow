import React from 'react';
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
import {HOME} from '../../../Constants/path';
import * as Contexts from '../../Context';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export function playerTurn(){
  const {userList} = Contexts.useUserListContext();
  console.log("userListは",userList);

  return(
    <View style={styles.container}>
      <Text style={styles.text}>{userList[0].name}'s Turn</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    width: width * 0.9,
    height: height * 0.2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    color: 'black',
    fontSize: height * 0.03,
    fontFamily: 'AppleSDGothicNeo-Bold',
    color: "white"
  },
});