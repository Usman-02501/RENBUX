import { StyleSheet } from 'react-native';
import { colors, wp, hp, fontSize, radius } from '../../constant';

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
    width: wp(12),
    height: hp(6),
    borderRadius: radius.radius7,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  callButton: {
    height: hp(8),
    width: wp(16),
    borderRadius: radius.radius4,
    backgroundColor: colors.pink,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
