import { StyleSheet } from 'react-native';
import { colors, fontSize, hp, radius, wp } from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(3),
  },
  shareButton: {
    width: wp(12),
    height: hp(6),
    borderRadius: radius.radius7,
    backgroundColor: colors.brightGray,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: hp(2),
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
    marginTop: hp(5)
  },
  imageBackGroundView: {
    paddingHorizontal: wp(3.5),
  },
  amountPaidText: {
    color: colors.white,
    fontWeight: '400',
    fontSize: fontSize.statusSize
  },
  priceText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: fontSize.medium,
  },
  priceTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingTop:hp(2.5)
  },
  transactionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop:hp(1)
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
});
