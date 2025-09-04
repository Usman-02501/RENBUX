import { StyleSheet } from 'react-native';
import { borderWidth, colors, fontSize, hp, radius, wp } from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(3),
  },
  topButtonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:hp(2)
  },
  backButton: {
    width: wp(12),
    height: hp(6),
    borderRadius: radius.radius7,
    backgroundColor: colors.veryDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButton: {
    width: wp(12),
    height: hp(6),
    borderRadius: radius.radius7,
    backgroundColor: colors.brightGray,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  SuccessImageView: {
    alignItems: 'center',
  },
  paymentText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: fontSize.medium,
    textAlign: 'center',
    marginTop: hp(3.5),
  },
  walletText: {
    fontWeight: '400',
    color: colors.silver,
    textAlign: 'center',
    fontSize: fontSize.small,
    lineHeight: hp(3.3),
    marginTop: hp(2.5),
    paddingHorizontal: wp(3.5),
  },
  imageBackGround: {
    height: hp(16),
    paddingHorizontal: wp(5),
    marginTop: hp(5),
  },
  imageBackGroundView: {
    paddingHorizontal: wp(3.5),
  },
  amountPaidText: {
    color: colors.white,
    fontWeight: '400',
    fontSize: fontSize.statusSize,
  },
  priceText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: fontSize.medium,
  },
  priceTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: hp(2.5),
  },
  transactionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: hp(1),
  },
  transactionText: {
    fontWeight: '400',
    color: colors.white,
    fontSize: fontSize.statusSize,
  },
  transactionNumberText: {
    fontWeight: '400',
    color: colors.white,
    fontSize: fontSize.statusSize,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: hp(3),
  },
  loadButton: {
    backgroundColor: colors.deepPink,
    borderRadius: radius.radius9,
    paddingVertical: wp(2.6),
    paddingHorizontal: hp(8),
    alignItems: 'center',
  },
  loadButtonText: {
    color: colors.white,
    fontSize: fontSize.mediumSmall,
    fontWeight: '700',
  },
  modalView: {
    backgroundColor: colors.nero,
    paddingHorizontal: wp(2),
    borderTopRightRadius: radius.radius3,
    borderTopLeftRadius: radius.radius3,
    
  },
  modalBottomView: {
    backgroundColor: colors.nero1,
    marginHorizontal: wp(2),
    paddingHorizontal: wp(3),
    paddingVertical: hp(2),
    borderRadius:radius.radius8,
    marginTop:hp(2),
    marginBottom:hp(2)
  },
  addMoneyText: {
    fontWeight: '700',
    color: colors.antiFlashWhite,
    paddingBottom: hp(1),
  },
  line: {
    paddingBottom: hp(3),
  },
  moneyView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: hp(2),
  },
  moneyText: {
    fontWeight: '500',
    color: colors.white,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    fontSize: fontSize.regSmall,
    backgroundColor: colors.darkLiver1,
    borderRadius: radius.radius1,
  },
  titleInput: {
    color: colors.silver,
    fontSize: fontSize.small,
    fontWeight: '400',
    borderColor: colors.red,
    borderWidth: borderWidth.normal,
    paddingVertical: hp(1),
    borderRadius: radius.radius2,
    backgroundColor: colors.darkLiver1,
    marginBottom: hp(2),
    paddingLeft:wp(4)
  },
});
