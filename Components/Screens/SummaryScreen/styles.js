import { Dimensions, StyleSheet } from 'react-native';
import { colors, fontSize, hp, radius, wp } from '../../constant';
 const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1),
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
  },
  backButton: {
   width: width * 0.11,
    height: width * 0.11,
    borderRadius: (width * 0.11) / 2,
    backgroundColor: colors.veryDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: colors.white,
    fontSize: fontSize.large,
    fontWeight: '700',
    textAlign: 'center',
  },
  headerSpacer: {
    width: wp(13),
  },
  content: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  motorcycleCard: {
    backgroundColor: colors.veryDark,
    borderRadius: radius.radius8,
    paddingHorizontal: wp(3),
    paddingVertical: hp(1.5),
    marginTop: hp(2),
  },
  motorcycleInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ironBikeView: {
    backgroundColor: colors.almostBlack,
    paddingHorizontal: wp(2.5),
    borderRadius: radius.radius8,
  },
  motorcycleDetails: {
    paddingLeft: wp(4),
  },
  motorcycleName: {
    color: colors.silverColor,
    fontSize: fontSize.mediumSmall,
    fontWeight: '500',
    marginBottom: hp(1),
  },
  storeName: {
    color: colors.silverColor,
    fontSize: fontSize.small,
    fontWeight: '400',
    marginBottom: hp(1),
  },
  price: {
    color: colors.whiteShade,
    fontSize: fontSize.mediumLarge,
    fontWeight: '700',
  },
  rentalPeriodCard: {
    backgroundColor: colors.veryDark,
    borderRadius: radius.radius8,
    paddingVertical: hp(2.3),
    paddingHorizontal: wp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(3),
  },
  rentalPeriodLeft: {
    flex: 1,
  },
  rentalPeriodTitle: {
    color: colors.silverColor,
    fontSize: fontSize.mediumSmall,
    fontWeight: '500',
    marginBottom: hp(1),
  },
  rentalDates: {
    color: colors.whiteShade,
    fontSize: fontSize.mediumSmall,
    fontWeight: '500',
  },
  rentalDays: {
    color: colors.whiteShade,
    fontSize: fontSize.mediumLarge,
    fontWeight: '700',
  },
  addOnsSection: {
    backgroundColor: colors.veryDark,
    borderRadius: radius.radius8,
    paddingTop: hp(0.5),
    paddingHorizontal: wp(3),
    marginTop: hp(3.5),
  },
  addOnsTitle: {
    color: colors.silverColor,
    fontSize: fontSize.statusSize,
    fontWeight: '500',
    marginBottom: hp(2),
  },
  addOnItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
    backgroundColor: colors.RaisinBlack,
    borderRadius: radius.radius2,
    padding: hp(1.5),
  },
  addOnLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  helmetIcon: {
    height: hp(8),
    width: wp(16),
    borderRadius: radius.radius1,
    backgroundColor: colors.almostBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jacketIcon: {
    height: hp(8),
    width: wp(16),
    borderRadius: radius.radius1,
    backgroundColor: colors.almostBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addOnDetails: {
    paddingLeft: wp(2),
  },
  addOnName: {
    color: colors.silverColor,
    fontSize: fontSize.mediumSmall,
    fontWeight: '500',
    marginBottom: hp(1),
  },
  addOnQuantity: {
    color: colors.graniteGray,
    fontSize: fontSize.mediumSmall,
    fontWeight: '400',
  },
  addOnPrice: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: '700',
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    backgroundColor: colors.RaisinBlack,
    alignItems: 'center',
  },
  walletView: {
    flexDirection: 'row'
  },
  paymentText: {
    color: colors.silver,
    fontSize: fontSize.mediumSmall,
    fontWeight: '500',
  },
  totalAmount: {
    color: colors.white,
    fontSize: fontSize.statusSize,
    fontWeight: '700',
    paddingTop: hp(0.5),
  },
  payButton: {
    backgroundColor: colors.deepPink,
    borderRadius: radius.radius9,
    paddingVertical: wp(2.6),
    paddingHorizontal: hp(8),
    alignItems: 'center'
  },
  payButtonText: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: '700',
  },
});
