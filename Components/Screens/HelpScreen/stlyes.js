import { StyleSheet } from 'react-native';
import { hp, wp, radius, colors, fontSize } from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1),
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
  },
  backButton: {
    width: wp(12),
    height: hp(6),
    borderRadius: radius.radius7,
    backgroundColor: colors.veryDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: colors.white,
    fontSize: fontSize.large,
    fontWeight: '700',
    textAlign: 'center',
  },
  headerSpacer: {
    width: wp(13),
  },
  helpContainer: {
    paddingHorizontal: wp(4),
    marginHorizontal: wp(4),
    marginTop: hp(4),
    backgroundColor: colors.charlestonGreen1,
    borderRadius: radius.radius8,
  },
  text: {
    color: colors.white,
    fontWeight: '500',
    fontSize: fontSize.avgSmall,
  },
  textImageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.RaisinBlack,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderRadius: radius.radius1,
    marginVertical: hp(1),
  },
  changeTimeView: {
    backgroundColor: colors.RaisinBlack,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderRadius: radius.radius1,
    marginVertical: hp(1),
  },
  pickTimeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editText: {
    fontWeight: '400',
    color: colors.silver,
    fontSize: fontSize.regSmall,
  },
  callContainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-end',
    paddingBottom:hp(1)
  },
  needHelpText: {
    color: colors.silver,
    fontWeight:'500',
    fontSize:fontSize.regSmall
  },
  numberText: {
    color:colors.blue,
    fontWeight:'500',
    fontSize:fontSize.regSmall
  },
});
