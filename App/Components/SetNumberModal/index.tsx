import {COLOR_PALLET} from '../../Constants/colors';
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as Contexts from '../../Context';
import {FONT} from '../../Constants/font';

const {height, width} = Dimensions.get('window');

export function SetNumberModal(props) {
  const {setInitialUserList} = Contexts.useUserListContext();
  const {numberModal, setNumberModal} = props;
  const [number, setNumber] = useState<number>(4);

  return (
    <>
      {numberModal && (
        <View style={styles.container}>
          <View style={styles.modalContainer}>
            <View style={styles.top}>
              <Text style={FONT.DEFAULT.HIRAGINO_BLACK_20_MEDIUM}>
                人数選んでもろて
              </Text>
            </View>
            <View style={styles.middle}>
              {number > 1 ? (
                <TouchableOpacity
                  onPress={() => {
                    setNumber(preNum => preNum - 1);
                  }}
                >
                  <View style={styles.button}>
                    <Text style={FONT.DEFAULT.HIRAGINO_BLACK_30_MEDIUM}>
                      ー
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <View style={styles.blankButton} />
              )}
              <View style={styles.numberView}>
                <Text style={FONT.DEFAULT.HIRAGINO_BLACK_55_MEDIUM}>
                  {number}
                </Text>
              </View>
              {number < 20 ? (
                <TouchableOpacity
                  onPress={() => {
                    setNumber(preNum => preNum + 1);
                  }}
                >
                  <View style={styles.button}>
                    <Text style={FONT.DEFAULT.HIRAGINO_BLACK_30_MEDIUM}>
                      ＋
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <View style={styles.blankButton} />
              )}
            </View>
            <TouchableOpacity
              style={styles.bottom}
              onPress={() => {
                setInitialUserList(number);
                setNumberModal(false);
              }}
            >
              <View>
                <Text style={FONT.DEFAULT.HIRAGINO_BLACK_20_MEDIUM}>
                  OK
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: height,
    width: width,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    height: '30%',
    width: '80%',
    backgroundColor: COLOR_PALLET.DEFAULT.MAIN_2,
    borderRadius: 10,
  },
  top: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    height: '60%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: width * 0.12,
    width: width * 0.12,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLOR_PALLET.DEFAULT.SUB_1,
  },
  blankButton: {height: width * 0.12, width: width * 0.12},
  numberView: {
    height: '100%',
    width: width * 0.35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
