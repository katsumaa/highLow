import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, Image, Dimensions, TouchableOpacity, Settings} from 'react-native';
import {HIGHLOW, SETTINGS, SEVENHEAVEN, HARDMODE} from '../../../Constants/path';
import { defaultUserList } from '../../../Constants/defaultUserList';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export function Home({navigation}){
    const [buttonCount,setButtonCount]=useState(0);
    const [userList, setUserList]=useState(defaultUserList);

    function changeHardMode({navigation}){
      if (buttonCount >= 15){
        return(
          <View style={styles.image}>
            <TouchableOpacity
              onPress={() => (
                navigation.navigate(HARDMODE),
                setButtonCount(0)
              )}>
              <Image source={require("../../../Images/shot.png")} resizeMode="contain" style={{height: height * 0.07, width: width * 0.07}}/>
            </TouchableOpacity>
          </View>
        )
      }else{
        return(
          <View style={styles.image}>
            <TouchableOpacity
              onPress={()=>{setButtonCount(buttonCount + 1)}}>
              <Image source={require("../../../Images/shot.png")} resizeMode="contain" style={{height: height * 0.07, width: width * 0.07}}/>
            </TouchableOpacity>
          </View>
        )
      }
    }
    return(
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate(HIGHLOW)}>
            <Text style={styles.text}>
                HighLow
            </Text>
            <Text style={styles.reverseText}>
                HighLow
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(SEVENHEAVEN)}>
            <Text style={styles.text}>
                King's Cup
            </Text>
            <Text style={styles.reverseText}>
                King's Cup
            </Text>
        </TouchableOpacity>       
        <TouchableOpacity onPress={() => navigation.navigate(SETTINGS)}>
            <Text style={styles.text}>
                Settings
            </Text>
            <Text style={styles.reverseText}>
                Settings
            </Text>
        </TouchableOpacity>
        {changeHardMode({navigation})}
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
    text: {
      height: height * 0.05,
      width: width,
      color: 'white', 
      fontSize: height * 0.05, 
      fontFamily: 'AppleSDGothicNeo-Light',
      marginTop: 100,
      textAlign: "center",
    },
    reverseText: {
      height: height * 0.05,
      width: width,
      transform: [{rotateX: '180deg'}],
      color: 'white',
      fontSize: height * 0.05, 
      fontFamily: 'AppleSDGothicNeo-Light',
      opacity: 0.14,
      textAlign: "center",
    },
    image: {
      width: width * 0.9,
      height: height * 0.1,
      marginTop: height * 0.2,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    }
});
