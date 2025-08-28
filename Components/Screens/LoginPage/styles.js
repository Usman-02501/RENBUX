import { StyleSheet } from 'react-native';
import {
  wp,
  hp,
  fontSize,
  borderWidth,
  radius,
  fontFamily,
} from '../../constant';
import { colors } from '../../../Components/constant/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.RaisinBlack,
    paddingHorizontal: wp(7),
  },
  bikeContainer: {
    marginTop: hp(5),
  },
  content: {
    paddingTop: hp(8),
  },
  title: {
    fontSize: fontSize.large,
    // fontWeight: '700',
    color: colors.white,
    fontFamily: fontFamily.regular,
  },
  subtitle: {
    marginTop: hp(1),
    fontSize: fontSize.mediumSmall,
    color: colors.lightGray,
    fontFamily: fontFamily.regular,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: borderWidth.normal,
    borderColor: colors.darkLiver,
    borderRadius: radius.radius2,
    height: hp(8),
    alignItems: 'center',
    marginTop: hp(4),
  },
  countryCode: {
    paddingHorizontal: wp(4),
    borderRightWidth: borderWidth.normal,
    borderRightColor: colors.darkLiver,
  },
  countryCodeText: {
    fontSize: fontSize.mediumSmall,
    color: colors.veryLightGray,
    fontWeight: '500',
  },
  phoneInput: {
    flex: 1,
    paddingHorizontal: wp(4),
    fontSize: fontSize.small,
    color: colors.silver,
    fontFamily: fontFamily.regular,
  },
  errorMessage: {
    color: colors.red,
    fontSize: fontSize.small,
    paddingTop: hp(1),
  },
  line: {
    marginTop: hp(8),
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGary,
    alignSelf: 'center',
    width: wp(30),
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(5),
    marginTop: hp(6.5),
  },
});
