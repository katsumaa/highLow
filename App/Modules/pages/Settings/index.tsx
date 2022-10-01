import React from 'react';
import {View, StyleSheet, Text, Button, Dimensions, TouchableOpacity} from 'react-native';
import {HIGHLOW} from '../../../Constants/path';
import {CARDLIST} from '../../../Constants/CardList';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import {HOME} from '../../../Constants/path';
import * as Animatable from 'react-native-animatable';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { RegisterUser } from '../../../Components/RegisterUser';
import * as Contexts from '../../../Context'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export function Settings() {
  const {userList, setUserList} = Contexts.useUserListContext();
  return(
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
      <RegisterUser />
    </View>
  )
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
    backgroundColor: '#464646',
  },
  textView:{
    
  }
});