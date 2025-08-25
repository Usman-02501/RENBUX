import { StyleSheet } from 'react-native';
import { wp, hp, radius, colors, fontSize } from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2),
  },
  backButton: {
    width: wp(12),
    height: hp(6),
    borderRadius: radius.radius7,
    backgroundColor: colors.graniteGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  segmentcontrolview: {
    paddingVertical: hp(0.5),
    borderRadius: radius.radius3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(0.5),
    backgroundColor: colors.black,
  },
  upcomingButton: {
    height: hp(6),
    width: wp(25),
    borderRadius: radius.radius3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upcomingText: {
    fontSize: fontSize.small,
    fontWeight: '400',
    color: colors.white,
  },
  flatlistItemContainer: {
    backgroundColor: colors.charlestonGreen1,
    paddingHorizontal: wp(3.5),
    borderRadius: radius.radius8,
  },
  listView: {
    marginTop: hp(2.5),
  },
  contentContainer: {
    gap: hp(2.5),
  },
  toplistView: {
    flexDirection: 'row',
    marginTop: hp(1.5),
    gap: wp(4),
  },
  bottomlistView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(2),
    marginTop: hp(1),
  },
  bikeView: {
    backgroundColor: colors.almostBlack,
    height: hp(10),
    width: wp(24),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: radius.radius8,
  },
  modelText: {
    color: colors.white,
    fontWeight: '500',
    fontSize: fontSize.small,
  },
  storeText: {
    fontWeight: '400',
    color: colors.silverColor,
    fontSize: fontSize.avgSmall,
    marginTop: hp(0.5),
  },
  quantityText: {
    fontWeight: '400',
    color: colors.silver,
    fontSize: fontSize.regSmall,
    marginTop: hp(1.3),
  },
  lineView: {
    marginTop: hp(1.5),
  },
  dateText: {
    fontWeight: '500',
    color: colors.quickSilver,
    fontSize: fontSize.small,
  },
  statusText: {
    fontWeight: '500',
    color: colors.brown,
    fontSize: fontSize.small,
  },
});
