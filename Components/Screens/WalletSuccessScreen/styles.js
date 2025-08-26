import { StyleSheet } from 'react-native';
import { colors, wp, hp, radius, fontSize } from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.deepPink,
    paddingTop: hp(1),
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
  },
  currentBalanceText: {
    color: colors.titleText,
    fontWeight: '400',
    fontSize: fontSize.regSmall,
    textAlign: 'center',
  },
  balanceText: {
    textAlign: 'center',
    color: colors.titleText,
    fontWeight: '800',
    fontSize: fontSize.avgLarge,
  },
  accountView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    gap: wp(0.5),
    height: hp(3),
    width: wp(37),
    borderRadius: radius.radius2,
    backgroundColor: colors.background,
    marginTop: hp(1),
  },
  accountText: {
    textAlign: 'center',
    fontWeight: '500',
    color: colors.titleText,
    fontSize: fontSize.avgSmall,
  },
  allButtonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(12),
    marginTop: hp(5),
    paddingBottom: hp(10),
  },
  addText: {
    fontWeight: '400',
    color: colors.titleText,
    fontSize: fontSize.regSmall,
    textAlign: 'center',
    marginTop: hp(0.8),
  },
  bottomView: {
    flex: 1,
    backgroundColor: colors.nero,
    borderTopRightRadius: radius.radius10,
    borderTopLeftRadius: radius.radius10,
  },
  centeredView: {
    flex: 1,
    marginTop: hp(39),
  },
  modalView: {
    alignItems: 'center',
    marginHorizontal: wp(5),
    backgroundColor: colors.deepGray,
    borderRadius: radius.radius8,
    paddingVertical: hp(2),
  },
  shareText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: fontSize.mediumSmall,
    marginTop: hp(0.8),
    textAlign: 'center',
  },
  inviteFriendButton: {
    backgroundColor: colors.deepPink,
    borderRadius: radius.radius9,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(22),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(1),
    marginTop: hp(1),
  },
  inviteFriendText: {
    color: colors.white,
    fontSize: fontSize.statusSize,
    fontWeight: '700',
  },
  transactionView: {
    marginHorizontal: wp(5),
    backgroundColor: colors.RaisinBlack,
    borderRadius: radius.radius8,
    paddingVertical: hp(2),
    marginTop: hp(2),
    paddingHorizontal: wp(4),
  },
  transactionTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionText: {
    color: colors.antiFlashWhite,
    fontWeight: '700',
    fontSize: fontSize.small,
  },
  seeAllText: {
    fontWeight: '600',
    color: colors.deepPink,
  },
  line: {
    marginTop: hp(2),
  },
  loadWalletText: {
    fontWeight: '400',
    color: colors.white,
    fontSize: fontSize.small,
  },
  dateText: {
    fontWeight: '400',
    color: colors.silver,
    fontSize: fontSize.avgSmall,
  },
  priceText: {
    fontWeight: '700',
    color: colors.white,
    fontSize: fontSize.statusSize,
  },
  walletContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop:hp(2)
  },
  imageTextView:{
    flexDirection:'row',
    alignItems:'center'
  },
  textView:{
   paddingLeft:wp(2) 
  }
});
