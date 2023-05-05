// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import {
  View,
  StyleSheet,
  Text,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {HIGHLOW} from '../../../Constants/path';
import {CARDLIST} from '../../../Constants/CardList';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import {HOME} from '../../../Constants/path';
import * as Animatable from 'react-native-animatable';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
// @ts-expect-error TS(6142): Module '../../../Components/RegisterUser' was reso... Remove this comment to see the full error message
import {RegisterUser} from '../../../Components/RegisterUser';
import * as Contexts from '../../../Context';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export function Settings() {
  const {userList} = Contexts.useUserListContext();
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <View style={styles.container}>
      {/*}
      <View style={styles.textView}>
        <Text style={{color: "white"}}>
          設定画面だよん{"\n"}{"\n"}
          ・背景の色/画像{"\n"}
          ・トランプの種類(自前の画像でトランプ作る？){"\n"}
          ・音声設定？{"\n"}
          ・各ゲームのINFO?
        </Text>
        <Animatable.Text animation="wobble">アニメーションテスト！！</Animatable.Text>
      </View>
  {*/}
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <RegisterUser />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // @ts-expect-error TS(1117): An object literal cannot have multiple properties ... Remove this comment to see the full error message
    backgroundColor: '#464646',
  },
  textView: {},
});
