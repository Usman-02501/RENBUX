import { StyleSheet } from 'react-native';
import { colors, wp, hp, radius, fontSize } from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.deepPink,
  },
  backButton: {
    width: wp(12),
    height: hp(6),
    borderRadius: radius.radius7,
    backgroundColor: colors.softPink,
    justifyContent: 'center',
    alignItems: 'center',
  },
  walletText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: fontSize.medium,
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingTop: hp(1),
  },
  renbuxAccountView: {
    alignItems: 'center',
    paddingTop: hp(4.2),
  },
  renbuxAccountText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: fontSize.statusSize,
    marginTop: hp(0.5),
  },
  inputContainer: {
    marginTop: hp(7),
    paddingHorizontal: wp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: radius.radius1,
    backgroundColor: colors.softPink,
    borderRadius: radius.radius1,
    marginHorizontal: wp(5),
    marginBottom: hp(3.5),
  },
  titleInput: {
    color: colors.white,
    fontSize: fontSize.small,
    fontWeight: '400',
    flex: 1,
  },
  settingsText: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: '700',
    paddingRight: wp(2),
  },
  bottomView: {
    flex: 1,
    backgroundColor: colors.nero,
    borderTopRightRadius: radius.radius10,
    borderTopLeftRadius: radius.radius10,
  },
  payView: {
    backgroundColor: colors.nero1,
    marginHorizontal: wp(4),
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
    marginTop: hp(2),
    borderRadius: radius.radius10,
    flex: 1,
  },
  payUsingText: {
    fontWeight: '700',
    color: colors.antiFlashWhite,
    fontSize: fontSize.statusSize,
  },
  line: {
    paddingTop: hp(4),
  },
  cardsText: {
    color: colors.quickSilver,
    fontWeight: '500',
    fontSize: fontSize.statusSize,
  },
  hdfBankText: {
    fontWeight: '400',
    color: colors.white,
    fontSize: fontSize.mediumSmall,
  },
  codeText: {
    color: colors.silver,
    fontWeight: '400',
    fontSize: fontSize.small,
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.eerieBlack,
    paddingHorizontal: wp(2),
    paddingVertical: wp(1.5),
    borderRadius: radius.radius1,
    marginTop: hp(1),
  },
  cardTextView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textView: {
    marginLeft: wp(2),
  },
  checkImage: {
    marginRight: wp(3),
  },
  payButton: {
    backgroundColor: colors.deepPink,
    borderRadius: radius.radius9,
    paddingVertical: hp(1.5),
    alignItems: 'center',
    marginBottom: hp(1),
  },
  payButtonText: {
    color: colors.white,
    fontSize: fontSize.statusSize,
    fontWeight: '700',
  },
  buttonView: {
    paddingHorizontal: wp(3),
    paddingTop: hp(1),
    paddingBottom:hp(1)
  },
  modalContainer:{
    flex:1,
    paddingHorizontal:wp(4),
    paddingTop:hp(2)
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
    paddingTop:hp(3)
  },
  paymentText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: fontSize.medium,
    textAlign: 'center',
    marginTop: hp(3.5),
  },
  walletText1: {
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
  }
});
