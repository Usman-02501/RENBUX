import { Dimensions, StyleSheet } from 'react-native';
import { colors, fontSize, hp, radius, wp } from '../../constant';
const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.RaisinBlack,
  },
  profileContainer: {
    backgroundColor: colors.veryDark,
    borderBottomLeftRadius: radius.radius4,
    borderBottomRightRadius: radius.radius4,
    paddingHorizontal: wp(3),
    paddingTop: hp(2.5),
    height: hp(38),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrowView: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: (width * 0.1) / 2,
    backgroundColor: colors.arrowBackColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileTextView: {
    flex: 1,
    alignItems: 'center',
  },
  profileText: {
    color: colors.white,
    fontSize: fontSize.mediumSmall,
    fontWeight: '700',
    paddingRight: wp(14),
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  pencilViewContainer: {
    position: 'absolute',
    left: wp(12),
    top: hp(2),
  },
  opacity: {
    position: 'absolute',
    bottom: 0,
  },
  profileLogoView: {
    backgroundColor: colors.black,
    height: hp(7.2),
    width: wp(30),
    borderTopRightRadius: radius.radius6,
    borderTopLeftRadius: radius.radius6,
  },
  imageContainer: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: (width * 0.3) / 2,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: hp(5),
    gap: wp(1),
    height: hp(12),
  },
  inputnameText: {
    fontWeight: '700',
    color: colors.white,
    paddingVertical: wp(2),
    fontSize: fontSize.small,
    backgroundColor: colors.darkBurgundy
  },
  nameText: {
    color: colors.white,
    fontSize: fontSize.mediumSmall,
    fontWeight: '700',
  },
  inputContainer: {
    marginTop: hp(2.5),
    paddingHorizontal: wp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: radius.radius1,
  },
  titleInput: {
    color: colors.white,
    fontSize: fontSize.small,
    fontWeight: '400',
    flex: 1,
  },
  settingsText: {
    color: colors.deepPink,
    fontSize: fontSize.small,
    fontWeight: '600',
  },
  bottomContainer: {
    paddingHorizontal: wp(4),
  },
});
