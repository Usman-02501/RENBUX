import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fontFamily, fontSize, hp, radius } from '../../constant';

const AppButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.sendButton} onPress={onPress}>
      <Text style={styles.sendButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  sendButton: {
    marginTop: hp(2.5),
    backgroundColor: colors.pink,
    borderRadius: radius.radius2,
    height: hp(7.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    fontSize: fontSize.mediumSmall,
    fontWeight: '700',
    color: colors.white,
    fontFamily: fontFamily.bold,
  },
});
