import React, {useContext} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';
import * as Contexts from '../../../Context';

import {HOME} from '../../Constants/path';

const {height, width} = Dimensions.get('window');

export function Result() {
  const {userList} = Contexts.useUserListContext();
  return(
    <View style={StyleSheet.container}>
      <Text>Result</Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
});
