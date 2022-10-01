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
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
} from 'react-native';
// @ts-expect-error TS(2307): Cannot find module '../../../Constants/path' or it... Remove this comment to see the full error message
import {HOME} from '../../../Constants/path';
import * as Contexts from '../Context';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export function PlayerTurn(props: any) {
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <View style={styles.container}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
    // @ts-expect-error TS(1117): An object literal cannot have multiple properties ... Remove this comment to see the full error message
    color: "white"
  },
});