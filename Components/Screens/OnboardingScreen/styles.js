import { StyleSheet } from 'react-native';
import { colors, fontSize, hp, wp } from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.RaisinBlack,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: hp(4),
  },
  imageContainer: {
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: wp(5),
    marginTop: hp(5),
  },
  mainText: {
    fontSize: fontSize.extraLarge,
    color: colors.white,
  },
  boldText: {
    fontWeight: '700',
  },
  brandText: {
    color: colors.pink,
    fontWeight: '700',
  },
  subText: {
    marginTop: hp(1),
    fontSize: fontSize.mediumSmall,
    color: colors.silverColor,
  },
  swipeButtonContainer: {
    paddingHorizontal: wp(6),
    paddingBottom: hp(4),
  },
  swipeButtonRail: {
    backgroundColor: colors.swipeButtonColor,
    borderWidth: 0,
  },
  swipeButtonText: {
    fontSize: fontSize.small,
    color: colors.white,
  },
  swipeButtonThumb: {
    borderWidth: 0,
  },
});
