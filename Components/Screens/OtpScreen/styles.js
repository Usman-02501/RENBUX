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
  otpInputView: {
    marginTop: hp(3.5),
  },
  pinCodeContainerStyle: {
    width: wp(13),
    height: hp(7),
    borderRadius: radius.radius2,
    borderWidth: borderWidth.normal,
    borderColor: colors.darkLiver,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStyle: {
    gap: wp(1),
  },
  pinCodeTextStyle: {
    color: colors.white,
    fontSize: fontSize.statusSize,
    textAlign: 'center',
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
