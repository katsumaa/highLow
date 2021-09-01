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

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

export function RegisterUser(){
  const {userList, setUserList} = Contexts.useUserListContext();

  const addUser = () => {
    console.log(userList);
    const num = userList[userList.length - 1].id + 2;
    setUserList([
      ...userList,
      {
        id: userList[userList.length - 1].id + 1,
        name: "User " + num,
        score: 0,
        totalScore: 0,
      },
    ])
  }

  const deleteUser = (id) => {
    console.log("id",id)
    if (userList.length>=2){
      var newList = userList
      newList.splice(id, 1)
      setUserList(newList)
      console.log(newList)
      console.log(userList)}
    else {}
  }

  return(
    <View style={styles.container}>
      <View style={{height: height * 0.2, width: width, flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <Text style={{fontSize: 40, color: "white"}}>
          Input Name
        </Text>
      </View>
      <FlatList 
        data={userList} 
        showsHorizontalScrollIndicator={true}
        style={styles.flatList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={{flexDirection: "row"}}>
            <View style={styles.userName}>
              <TextInput 
                value={item.name}
                onChangeText={(value) => {
                  var newUserList = userList
                  newUserList[item.id].name = value
                  console.log(newUserList)
                  setUserList([
                    newUserList
                  ])
                }}
                style={styles.input}
              />
            </View>
            <TouchableOpacity
              onPress={()=>(deleteUser(item.id))}
            >
              <View style={styles.closeButton}>
                <Text style={{fontSize: 30}}>
                  ×
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        onPress = {()=>(addUser())}
      >
        <View style={styles.addUser}>
          <Text>
            ＋
          </Text>
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
