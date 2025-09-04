import { Dimensions, StyleSheet } from 'react-native';
import { colors, wp, hp, fontSize, radius } from '../../constant';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.RaisinBlack,
    paddingHorizontal: wp(4),
  },
  imagesView: {
    flexDirection: 'row',
    paddingTop: hp(3),
    justifyContent: 'space-between',
  },
  drawerView: {
    height: hp(5.8),
    width: wp(11.8),
    borderRadius: radius.radius4,
    backgroundColor: colors.darkGary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloText: {
    marginTop: hp(2.5),
    color: colors.brightGray,
    fontSize: fontSize.medium,
  },
  junnText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  favBikeText: {
    fontSize: fontSize.statusSize,
    color: colors.brightGray,
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
    fontSize: fontSize.mediumSmall,
    fontWeight: '600',
    flex: 1,
  },
  settingsText: {
    color: colors.deepPink,
    fontSize: fontSize.small,
    fontWeight: '600',
  },
  scrollViewContainer: {
    marginTop: hp(3),
  },
  scrollView: {
    flexGrow: 0,
  },
  scrollContent: {},
  listItem: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(1),
    marginRight: wp(3),
    borderRadius: radius.radius3,
  },
  selectedItem: {
    backgroundColor: colors.deepPink,
  },
  unselectedItem: {
    backgroundColor: colors.charlestonGreen,
  },
  selectedText: {
    color: colors.white,
    fontSize: fontSize.small,
    fontWeight: '500',
    textAlign: 'center',
  },
  unselectedText: {
    color: colors.simplyGray,
  },
  textView: {
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  popularText: {
    fontSize: fontSize.medium,
    color: colors.white,
    fontWeight: '500',
  },
  seeAllText: {
    color: colors.deepPink,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageBackGround: {
    width: width * 0.91,
    overflow: 'hidden',
    aspectRatio: 16 / 9,
  },
  listTopView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2)
  },
  listTextContainer: {
    paddingLeft: wp(4),
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(1.5),
    marginTop: hp(2),
  },
  starView: {},
  ratingText: {
    color: colors.gray,
  },
  nameText: {
    color: colors.softPink,
    fontWeight: '400',
    marginTop: hp(2),
  },
  modelText: {
    color: colors.lightGray,
    fontSize: fontSize.large,
  },
  listBottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(4),
    paddingHorizontal: wp(1),
  },
  rentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
    paddingLeft: wp(4),
  },
  priceText: {
    color: colors.lightGray,
    fontSize: fontSize.mediumLarge,
  },
  rentText: {
    color: colors.Gray,
    fontSize: fontSize.small,
  },
  arrowView: {
    paddingHorizontal: wp(2.5),
    paddingVertical: hp(1),
    backgroundColor: colors.deepPink,
    borderRadius: radius.radius2,
    borderTopLeftRadius: radius.radius7,
  },
  contentContainer: {
    gap: hp(1),
    paddingBottom: hp(3),
  },
});
