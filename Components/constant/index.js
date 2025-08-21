import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export const wp = p => widthPercentageToDP(p);
export const hp = p => heightPercentageToDP(p);

export const colors = {
  RaisinBlack: '#222222',
  white: '#FFFFFF',
  lightGray: '#D3D3D3',
  darkLiver: '#4E4E4E',
  veryLightGray: '#F1F1F1',
  silver: '#B1B1B1',
  pink: '#DC2F59',
  deepPink: '#DC2F63',
  softPink: '#F05584',
  gray: '#BDBDBD',
  Gray: '#818181',
  veryDark:'#2F2F2F',
  darkGary: '#353535',
  brightGray: '#747474',
  simplyGray: '#898989',
  lightGray: '#BBBBBB',
  green: '#18B43C',
  silverColor: '#C0C0C0',
  black: '#000000',
  swipeButtonColor: '#CB274F30',
  brandlogo: '#5A5A5A33',
  selectbrandlogo: '#DC2F5966',
  darkCharcoal: '#333333',
  blackOlive: '#3B3B3B',
  charlestonGreen: '#2D2D2D',
  arrowBackColor: '#8A8A8A24',
};

export const radius = {
  radius1: wp(2),
  radius2: wp(4),
  radius3: wp(7),
  radius4: wp(10),
  radius5: wp(90),
  radius6:wp(18)
};

export const fontSize = {
  extraSmall: wp(2.5),
  regSmall: wp(3.1),
  avgSmall: wp(3.7),
  small: wp(4),
  mediumSmall: wp(4.5),
  statusSize: wp(5),
  medium: wp(6),
  large: wp(7),
  mediumLarge: wp(8),
  extraLarge: wp(9),
  doubleXLarge: wp(14),
  superLarge: wp(18),
};

export const borderWidth = {
  none: 0,
  thin: wp(0.2),
  normal: wp(0.3),
  thick: wp(0.5),
  extraThick: wp(1),
};

export const fontFamily = {
  medium: 'Montserrat-Medium',
  bold: 'Montserrat-Bold',
  regular: 'Montserrat-Regular',
};
