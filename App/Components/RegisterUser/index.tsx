// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, {useState, useEffect} from 'react';
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
import * as Contexts from '../../Context';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export function RegisterUser() {
  const {userList, setUserList} = Contexts.useUserListContext();

  const addUser = () => {
    console.log(userList);
    const num = userList[userList.length - 1].id + 2;
    const checkTurnFocus = userList.some((element: any) => element.turnFocus === true);
    //TODO: turnFocus:trueが存在するかで場合分けする必要がある
    setUserList([
      ...userList,
      {
        id: userList[userList.length - 1].id + 1,
        name: 'User ' + num,
        score: 0,
        totalScore: 0,
        turnFocus: checkTurnFocus ? false : true,
      },
    ]);
  };

  const deleteUser = (id: any, item: any) => {
    console.log(userList);
    console.log('id', id);
    if (userList.length >= 2) {
      const newList = userList.filter((element: any) => element.id !== id);
      if (item.turnFocus) {
        newList[0].turnFocus = true;
      }
      setUserList(newList);
    } else {
      console.log('Userがは2人以下にはできません。');
    }
  };

  //TODO；まだ途中、名前を変更するとエラーが出る,Jsonの一部変更の方法をググる必要がある。
  /*
  function mkNewUserList(num) {
    setUserList([
      ...userList,
      {
        id: userList[userList.length - 1].id + 1,
        name: 'User ' + num,
        score: userList[num].score,
        totalScore: userList[num].totalScore,
        turnFocus: userList[num].turnFocus,
      },
    ]);
  }
*/
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <View style={styles.container}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <View
        style={{
          height: height * 0.2,
          width: width,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"}}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Text style={{fontSize: 40, color: "white"}}>Input Name</Text>
      </View>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FlatList
        data={userList}
        showsHorizontalScrollIndicator={true}
        style={styles.flatList}
        //keyExtractor={item => item.id}
        renderItem={({
          item,
          index
        }: any) => (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <View style={{flexDirection: 'row'}}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <View style={styles.userName}>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <TextInput
                value={item.name}
                onChangeText={(value: any) => {
                  var newUserList = userList;
                  newUserList[index].name = value;
                  console.log(newUserList);
                  setUserList(newUserList);
                }}
                style={styles.input}
              />
            </View>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TouchableOpacity onPress={() => deleteUser(item.id, item)}>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <View style={styles.closeButton}>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Text style={{fontSize: 30}}>×</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <TouchableOpacity onPress={() => (addUser())}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <View style={styles.addUser}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Text>＋</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#464646',
  },
  userName: {
    width: width * 0.7,
    height: height * 0.06,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // @ts-expect-error TS(1117): An object literal cannot have multiple properties ... Remove this comment to see the full error message
    backgroundColor: "white",
    borderRadius: 30,
    margin: 20,
  },
  closeButton: {
    width: width * 0.05,
    height: height * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  input: {
    width: width * 0.5,
    height: height * 0.1,
    padding: 15,
    fontSize: 20,
    color: "#696969",
  },
  addUser: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 0,
    marginBottom: 20,
  },
})
