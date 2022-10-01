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
import {HOME} from '../../../Constants/path';
import * as Contexts from '../Context';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export function PlayerTurn(props) {
  const {userList} = Contexts.useUserListContext();
  const [currentPlayer, setCurrentPlayer] = useState(userList[0]);
  //TODO:turn Focusのbloon仁応じてターンユーザーを選ぶ関数を追加
  useEffect(() => {
    let num = 0;
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].turnFocus) {
        num = i;
      }
    }
    setCurrentPlayer(userList[num]);
  }, [userList]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{currentPlayer.name}'s Turn</Text>
    </View>
  );
}

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