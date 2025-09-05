import { Dimensions, StyleSheet } from 'react-native';
import { wp, hp, radius, colors, fontSize } from '../../constant';
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  backButton: {
  width: width * 0.11,
    height: width * 0.11,
    borderRadius: (width * 0.11) / 2,
    backgroundColor: colors.darkGary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButton: {
    width: width * 0.11,
    height: width * 0.11,
    borderRadius: (width * 0.11) / 2,
    backgroundColor: colors.brightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2),
  },
  bookingConfirmView: {
    height: hp(23.4),
  },
  bookingConfirmText: {
    fontWeight: '700',
    fontSize: fontSize.avgLarge,
    textAlign: 'center',
  },
  ironBikeStyle: {
    position: 'absolute',
    top: hp(5.5),
    left: wp(20),
  },
  orderDetailView: {
    backgroundColor: colors.veryDark,
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderRadius: radius.radius2,
  },
  orderDetailText: {
    color: colors.veryLightGray,
    fontWeight: '500',
    fontSize: fontSize.small,
  },
  bikeText: {
    fontWeight: '500',
    color: colors.silverColor,
    fontSize: fontSize.avgSmall,
  },
  detailText: {
    fontWeight: '500',
    color: colors.whiteShade,
    fontSize: fontSize.avgSmall,
  },
  textView: {
    flexDirection: 'row',
    marginTop: hp(1.8),
  },
  BikeNameView: {
    gap: hp(2),
  },
  BikeDetailView: {
    paddingLeft: wp(4),
    gap: hp(2),
  },
  bottomView: {
    backgroundColor: colors.veryDark,
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderRadius: radius.radius2,
    marginTop: hp(3),
  },
  addText: {
    fontWeight: '500',
    color: colors.silverColor,
    fontSize: fontSize.small,
  },
  productNameText: {
    fontWeight: '500',
    color: colors.silverColor,
    fontSize: fontSize.regSmall,
    paddingTop: hp(1),
  },
  imageView: {
    backgroundColor: colors.RaisinBlack,
    height: hp(9),
    width: wp(18),
    borderRadius: radius.radius8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    gap: wp(6),
    marginTop: hp(3),
  },
  ViewOrderButton: {
    backgroundColor: colors.deepPink,
    borderRadius: radius.radius9,
    paddingVertical: wp(2.6),
    alignItems: 'center',
    marginTop:hp(5)
  },
  ViewOrderText: {
    color: colors.white,
    fontSize: fontSize.mediumSmall,
    fontWeight: '700',
  },
});
