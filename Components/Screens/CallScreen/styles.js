import { Dimensions, StyleSheet } from 'react-native';
import { colors, wp, hp, fontSize, radius } from '../../constant';
 const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  callText: {
    fontWeight: '400',
    color: colors.lightGray,
    textAlign: 'center',
    paddingTop: hp(12),
    fontSize: fontSize.avgSmall,
  },
  personImageView: {
    paddingTop: hp(15),
  },
  personImage: {
    alignSelf: 'center',
  },
  nameText: {
    fontWeight: '700',
    color: colors.white,
    textAlign: 'center',
    paddingTop: hp(1.5),
    fontSize: fontSize.medium,
  },
  companyText: {
    fontWeight: '400',
    color: colors.lightGray,
    textAlign: 'center',
    paddingTop: hp(1),
    fontSize: fontSize.regSmall,
  },
  timeText: {
    fontWeight: '400',
    color: colors.lightGray,
    textAlign: 'center',
    paddingTop: hp(1),
    fontSize: fontSize.regSmall,
  },
  buttonsView: {
    flex: 1,
    gap: wp(6.5),
    paddingBottom: hp(6),
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
  backButton: {
   width: width * 0.12,
    height: width * 0.12,
    borderRadius: (width * 0.12) / 2,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  callButton: {
      width: width * 0.15,
    height: width * 0.15,
    borderRadius: (width * 0.15) / 2,
    backgroundColor: colors.pink,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
