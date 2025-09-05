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
    marginTop: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkGary,
  },
  cancelImageView: {
    paddingTop: hp(15),
  },
  cancelImage: {
    alignSelf: 'center',
  },
  cancelText: {
    fontWeight: '700',
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize.mediumSmall,
    paddingTop: hp(3),
  },
  SuccessText: {
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: hp(1),
    lineHeight: hp(2),
    color: colors.silver,
    fontSize: fontSize.regSmall,
  },
  walletText: {
    fontWeight: '400',
    textAlign: 'center',
    paddingBottom: hp(2),
    color: colors.lightGray,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  walletButton: {
    backgroundColor: colors.deepPink,
    borderRadius: radius.radius9,
    paddingVertical: hp(1.5),
    marginHorizontal: wp(5),
    alignItems: 'center',
    marginBottom: hp(3),
  },
  walletButtonText: {
    color: colors.white,
    fontSize: fontSize.mediumSmall,
    fontWeight: '700',
  },
});
