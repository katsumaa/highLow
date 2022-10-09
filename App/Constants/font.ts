import {
  Dimensions,
  StyleProp,
  StyleSheet,
  TextProps,
} from 'react-native';
import { COLOR_PALLET } from './colors';
import { moderateVerticalScale } from 'react-native-size-matters';

//NOTE: vwはiphone12(縦844)を基準にした倍率を表す
const vw =
  Dimensions.get('window').height /
  moderateVerticalScale(844);

export const FONT = {
  DEFAULT: StyleSheet.create({
    HIRAGINO_BLACK_55_MEDIUM: {
      color: COLOR_PALLET.DEFAULT.FONT_MAIN,
      fontFamily: 'Hiragino Sans',
      fontSize: 55 * vw,
    },
  }),
};
