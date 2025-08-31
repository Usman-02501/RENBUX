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
    paddingTop: hp(3),
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
    borderColor: colors.black,
    borderWidth: borderWidth.normal,
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
    fontWeight: '700',
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
    paddingHorizontal: wp(6),
    marginTop: hp(5),
  },
  cardbottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(6),
    marginTop: hp(3),
  },
  modalView: {
    paddingHorizontal: wp(5),
    backgroundColor: colors.nero,
  },
  topModalView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.nero,
    marginTop: wp(19),
    borderRadius: radius.radius3,
  },
  modalContainer: {
    backgroundColor: colors.nero1,
    marginHorizontal: wp(4),
    paddingHorizontal: wp(5),
    borderRadius: radius.radius2,
    paddingVertical: hp(3),
  },
  line1: {
    marginTop: hp(1),
    marginBottom: hp(1),
  },
  title: {
    fontSize: fontSize.avgSmall,
    fontWeight: '500',
    color: colors.antiFlashWhite,
  },
  durationContainer: {
    flexDirection: 'row',
    gap: wp(2),
    paddingBottom:hp(2.5)
  },
  durationButton: {
    paddingHorizontal: wp(3.7),
    paddingVertical: hp(0.9),
    backgroundColor: colors.darkLiver1,
    borderRadius: radius.radius1,
  },
  selectedDurationButton: {
    backgroundColor: colors.deepPink,
  },
  durationText: {
    color: colors.lightGray,
    fontSize: fontSize.avgSmall,
    fontWeight: '500',
  },
  selectedDurationText: {
    color: colors.white,
  },
  arrow: {
    fontSize: fontSize.mediumLarge,
    color: colors.white,
  },
  periodText: {
    fontSize: fontSize.small,
    color: colors.quickSilver,
    fontWeight: '500',
  },
  rentalList: {
    gap: wp(2.5),
  },
  rentalItem: {
    alignItems: 'center',
    backgroundColor: colors.veryDark,
    borderRadius: radius.radius2,
    height: hp(18),
    width: wp(23),
    marginVertical: hp(1),
  },
  itemImageContainer: {
    marginTop: hp(1.5),
  },
  itemName: {
    color: colors.white,
    fontSize: fontSize.avgSmall,
    fontWeight: '400',
  },
  itemPrice: {
    color: colors.white,
    fontSize: fontSize.statusSize,
    fontWeight: '700',
  },
  addButton: {
    position: 'absolute',
    bottom: hp(0),
    right: wp(0),
  },
  bookButton: {
    backgroundColor: colors.deepPink,
    paddingVertical: hp(2),
    borderRadius: radius.radius3,
    alignItems: 'center',
    marginBottom: hp(1),
    marginHorizontal: wp(3),
    marginTop: hp(1),
  },
  bookButtonText: {
    color: colors.white,
    fontSize: fontSize.statusSize,
    fontWeight: '700',
  },
  flatlistView: {
    marginHorizontal: wp(5),
    paddingBottom: hp(1),
    marginTop: hp(2),
    paddingHorizontal: wp(2),
    borderRadius: radius.radius2,
    backgroundColor: colors.nero1,
  },
});
