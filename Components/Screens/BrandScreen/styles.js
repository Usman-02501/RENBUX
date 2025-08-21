import { StyleSheet } from 'react-native';
import {
  colors,
  fontSize,
  hp,
  radius,
  wp,
} from '../../../Components/constant/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.RaisinBlack,
    paddingHorizontal: wp(5),
  },
  header: {
    marginTop: hp(5),
  },
  title: {
    textAlign: 'center',
    fontSize: fontSize.extraLarge,
    color: colors.white,
    fontWeight: '300',
  },
  listView: {
    marginTop: hp(3),
  },
  boldText: {
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: hp(0.5),
    paddingHorizontal: hp(1),
  },
  brandItem: {
    height: hp(6),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp(3),
    borderTopRightRadius: radius.radius2,
    borderBottomLeftRadius: radius.radius2,
  },
  contentContainerStyle: {
    flexDirection: 'row',
    gap: wp(3),
    flexWrap: 'wrap',
  },
  brandLogo: {
    marginRight: wp(2),
  },
  brandName: {
    color: colors.white,
    fontSize: fontSize.small,
    fontWeight: '500',
  },
  skipButtonText: {
    marginTop:hp(2),
    textAlign: 'center',
    color: colors.silverColor,
    fontSize: fontSize.avgSmall,
    fontWeight: '400',
  },
});
