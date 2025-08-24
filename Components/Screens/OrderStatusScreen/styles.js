import { StyleSheet } from 'react-native';
import { wp, hp, radius, colors } from '../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    width: wp(12),
    height: hp(6),
    borderRadius: radius.radius7,
    backgroundColor: colors.darkGary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
