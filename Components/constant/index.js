import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export const wp = p => widthPercentageToDP(p);
export const hp = p => heightPercentageToDP(p);

export const colors = {
  RaisinBlack: '#222222',
  white: '#FFFFFF',
  whiteShade: '#FDFDFD',
  antiFlashWhite: '#F1F1F1',
  lightGray: '#D3D3D3',
  darkLiver: '#4E4E4E',
  darkLiver1: '#505050',
  veryLightGray: '#F1F1F1',
  quickSilver: '#A1A1A1',
  silver: '#B1B1B1',
  veryDarkPink:'rgba(220, 47, 99, 0.25)',
  pink: '#DC2F59',
  deepPink: '#DC2F63',
  softPink: '#F05584',
  gray: '#BDBDBD',
  Gray: '#818181',
  veryDark: '#2F2F2F',
  darkGary: '#353535',
  veryDarkGray: '#333232',
  brightGray: '#747474',
  simplyGray: '#898989',
  lightGray: '#BBBBBB',
  simpleGray: '#D5D5D5',
  doveGray: '#727272',
  gray15: '#262626',
  deepGray:'#373737',
  graniteGray: '#666666',
  spanishGray: '#999999',
  green: '#18B43C',
  darkGreen: '#3CBA68',
  silverColor: '#C0C0C0',
  silverChalice: '#AFAFAF',
  black: '#000000',
  chineseblack: '#141414',
  almostBlack: '#272727',
  nearBlack: '#2A2A2A',
  eerieBlack:'#1E1E1E',
  swipeButtonColor: '#CB274F30',
  brandlogo: '#5A5A5A33',
  selectbrandlogo: '#DC2F5966',
  darkCharcoal: '#333333',
  blackOlive: '#3B3B3B',
  smokyBlack: '#0F0F0F',
  charlestonGreen: '#2D2D2D',
  charlestonGreen1: '#2B2B2B',
  arrowBackColor: '#8A8A8A24',
  transparent: '#00000000',
  nero: '#202020',
  nero1: '#252525',
  brown: '#BA873C',
  titleText:'rgba(255, 255, 255, 1)',
  background:'rgba(255, 255, 255, 0.29)'
};

export const radius = {
  radius1: wp(2),
  radius2: wp(4),
  radius3: wp(7),
  radius4: wp(10),
  radius5: wp(90),
  radius6: wp(18),
  radius7: wp(6),
  radius8: wp(3),
  radius9: wp(5),
  radius10: wp(7.5),
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
  avgLarge: wp(10),
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
