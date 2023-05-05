import React, {useContext, useState, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';
import * as Contexts from '../../../Context';
import * as Path from '../../../Constants/path';

import {HOME} from '../../Constants/path';
import {COLOR_PALLET} from '../../../Constants/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {FONT} from 'HighLow/App/Constants/font';
import {TouchableOpacity} from 'react-native';

const {height, width} = Dimensions.get('window');

const crownImage = {
  first: require('../../../Images/ranking/firstIcon.png'),
  second: require('../../../Images/ranking/secondIcon.png'),
  third: require('../../../Images/ranking/thirdIcon.png'),
};

function showRankImage(index) {
  switch (index) {
    case 0:
      return (
        <Image
          style={styles.image}
          source={require('../../../Images/ranking/firstIcon.png')}
          resizeMode={'contain'}
        />
      );
    case 1:
      return (
        <Image
          style={styles.image}
          source={require('../../../Images/ranking/secondIcon.png')}
          resizeMode={'contain'}
        />
      );
    case 2:
      return (
        <Image
          style={styles.image}
          source={require('../../../Images/ranking/thirdIcon.png')}
          resizeMode={'contain'}
        />
      );
    default:
      break;
  }
}

function sortUserList(userList, setSortedUserList) {
  const newUserList = userList
    .sort((a, b) => b.totalScore - a.totalScore)
    .sort((a, b) => b.score - a.score);
  setSortedUserList(newUserList);
}

export function Result({navigation}) {
  const {userList} = Contexts.useUserListContext();
  const [sortedUserList, setSortedUserList] = useState([]);
  useEffect(() => {
    sortUserList(userList, setSortedUserList);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Result</Text>
      </View>
      <View style={styles.content}>
        <ScrollView>
          {sortedUserList.map((e, index) => (
            <View style={styles.contentBox}>
              <View style={styles.rankBox}>{showRankImage(index)}</View>
              <View style={styles.userBox}>
                <Image
                  style={styles.image}
                  source={e.image}
                  resizeMode={'contain'}
                />
              </View>
              <View style={styles.countBox}>
                <Text style={FONT.DEFAULT.HIRAGINO_BLACK_30_MEDIUM}>
                  {e.score}杯　( {e.totalScore} )
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate(Path.HOME)}
        >
          <Text style={FONT.DEFAULT.HIRAGINO_BLACK_20_MEDIUM}>Home</Text>
        </TouchableOpacity>
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
    height: '90%',
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '10%',
  },
  contentBox: {
    height: height * 0.12,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_PALLET.DEFAULT.MAIN_2,
  },
  rankBox: {
    height: '80%',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userBox: {
    height: '80%',
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countBox: {
    height: '80%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'AppleSDGothicNeo-UltraLight',
  },
  homeButton: {
    height: '8%',
    width: '40%',
    backgroundColor: COLOR_PALLET.DEFAULT.MAIN_2,
    marginBottom: '10%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
