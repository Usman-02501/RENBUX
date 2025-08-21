import { StyleSheet } from 'react-native';
import { colors, fontSize, hp, radius, wp } from '../../constant';

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
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrowView: {
    height: hp(6.5),
    width: wp(13),
    backgroundColor: colors.arrowBackColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: radius.radius4,
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
    top:hp(2)
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
    height: hp(16),
    width: wp(29),
    borderRadius: radius.radius5,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  nameContainer: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'center',
    paddingTop: hp(3),
    paddingBottom: hp(5),
    gap: wp(1)
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
