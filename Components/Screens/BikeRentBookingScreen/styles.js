import { StyleSheet } from 'react-native';
import {
  borderWidth,
  colors,
  fontFamily,
  fontSize,
  hp,
  radius,
  wp,
} from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
    paddingTop: hp(3),
  },
  drawerView: {
    height: hp(5.8),
    width: wp(11.8),
    borderRadius: radius.radius4,
    backgroundColor: colors.gray15,
    borderWidth: borderWidth.normal,
    borderColor: colors.darkGary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  starDrawerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ironBikeView: {
    height: hp(35),
    alignItems: 'center',
  },
  ironBike: {
    position: 'absolute',
    bottom: 72,
    zIndex: 1,
  },
  roundShape: {
    position: 'absolute',
    bottom: 68,
  },
  harleyIronView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  harleyIronText: {
    color: colors.simpleGray,
    fontSize: fontSize.statusSize,
    fontWeight: '700',
  },
  ratingText: {
    color: colors.gray,
    fontSize: fontSize.mediumSmall,
    fontWeight: '400',
  },
  allButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(7),
  },
  buttonsContainerView: {
    alignItems: 'center',
  },
  starView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
  },
  buttons: {
    height: hp(8),
    width: wp(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.radius7,
  },
  maxSpeedText: {
    color: colors.doveGray,
    fontWeight: '400',
    fontSize: fontSize.regSmall,
    paddingTop: hp(1),
  },
  kmText: {
    color: colors.silverChalice,
    fontWeight: '500',
    fontSize: fontSize.mediumSmall,
    paddingTop: hp(0.5),
  },
  imageBackGround: {
    height: hp(29),
    width: wp('90%'),
  },
  bookNowCard: {
    height: hp(25),
    borderRadius: radius.radius2,
    borderColor:colors.black,
    borderWidth:borderWidth.normal
  },
  calendarView: {
    height: hp(5.8),
    width: wp(11.8),
    borderRadius: radius.radius4,
    backgroundColor: colors.gray15,
    borderWidth: borderWidth.normal,
    borderColor: colors.darkGary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardPriceText: {
    color: colors.whiteShade,
    fontSize: fontSize.medium,
    fontWeight: '700'
  },
  rentText: {
    color: colors.Gray,
    fontSize: fontSize.regSmall,
    fontWeight: '400',
  },
  sendButton: {
    backgroundColor: colors.deepPink,
    borderRadius: radius.radius7,
    height: hp(6.5),
    width: wp(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    fontSize: fontSize.mediumSmall,
    fontWeight: '700',
    color: colors.white,
    fontFamily: fontFamily.bold,
  },
  cardtopView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:wp(6),
    marginTop:hp(5)
  },
  cardbottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:wp(6),
    marginTop:hp(3)
  },
});
