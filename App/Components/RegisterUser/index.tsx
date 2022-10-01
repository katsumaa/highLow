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
} from 'react-native';
import {HOME} from '../../../Constants/path';
import * as Contexts from '../../Context';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export function RegisterUser() {
  const {userList, setUserList} = Contexts.useUserListContext();

  const addUser = () => {
    console.log(userList);
    const num = userList[userList.length - 1].id + 2;
    const checkTurnFocus = userList.some(element => element.turnFocus === true);
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

  const deleteUser = (id, item) => {
    console.log(userList);
    console.log('id', id);
    if (userList.length >= 2) {
      const newList = userList.filter(element => element.id !== id);
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
    <View style={styles.container}>
      <View
        style={{
          height: height * 0.2,
          width: width,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"}}>
        <Text style={{fontSize: 40, color: "white"}}>Input Name</Text>
      </View>
      <FlatList
        data={userList}
        showsHorizontalScrollIndicator={true}
        style={styles.flatList}
        //keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View style={{flexDirection: 'row'}}>
            <View style={styles.userName}>
              <TextInput
                value={item.name}
                onChangeText={value => {
                  var newUserList = userList;
                  newUserList[index].name = value;
                  console.log(newUserList);
                  setUserList(newUserList);
                }}
                style={styles.input}
              />
            </View>
            <TouchableOpacity onPress={() => deleteUser(item.id, item)}>
              <View style={styles.closeButton}>
                <Text style={{fontSize: 30}}>×</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity onPress={() => (addUser())}>
        <View style={styles.addUser}>
          <Text>＋</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
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
