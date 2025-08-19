import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../CustomText';
import { wp } from '../../constant';
import {useThemeAwareObject} from '../../Theme/ThemeAwareObjectHook';

const CustomHeader = ({
  customTopView,
  heading,
  headingStyle,
  leftIcon,
  text,
  leftIconFunction,
  middleIcon,
  middleIconFunction,
  rightIcon,
  rightIconFunction,
  rightIconTwo,
  rightIconFunctionTwo,
  textTwo,
}) => {
  const styles = useThemeAwareObject(createStyle);

  return (
    <View style={[styles.topView, customTopView]}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={leftIconFunction}>
          {leftIcon ? leftIcon : <Text style={styles.headerText}>{text}</Text>}
        </TouchableOpacity>
      </View>
      <View style={styles.centerContainer}>
        <View style={styles.headingContainer}>
          <Text style={[styles.heading, headingStyle]}>{heading}</Text>
          {middleIcon && (
            <TouchableOpacity
              onPress={middleIconFunction}
              style={styles.middleIcon}>
              {middleIcon}
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.rightContainer}>
        {textTwo && (
          <TouchableOpacity onPress={rightIconFunction}>
            <Text style={styles.headerText}>{textTwo}</Text>
          </TouchableOpacity>
        )}
        {rightIcon && (
          <TouchableOpacity
            onPress={rightIconFunction}
            style={styles.rightIcon}>
            {rightIcon}
          </TouchableOpacity>
        )}
        {rightIconTwo && (
          <TouchableOpacity
            onPress={rightIconFunctionTwo}
            style={styles.rightIcon}>
            {rightIconTwo}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const createStyle = theme => {
  return StyleSheet.create({
    topView: {
      flexDirection: 'row',
      alignItems: 'center',
      width: wp(100),
      backgroundColor: theme.color.primaryColor,
      padding: wp(1),
      paddingHorizontal: wp(5),
    },
    leftContainer: {
      position: 'absolute',
      left: wp(5),
    },
    centerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    rightContainer: {
      position: 'absolute',
      right: wp(5),
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(2),
    },
    headerText: {
      color: theme.color.black,
      fontSize: theme.size.statusSize,
    },
    heading: {
      color: theme.color.white,
      fontFamily: theme.family.medium,
      fontSize: theme.size.statusSize,
      fontWeight: 'bold',
    },
    headingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    middleIcon: {
      marginTop: wp(0.5),
      marginLeft: wp(1),
    },
    rightIcon: {
      // marginTop: wp(0.5),
      marginLeft: wp(1),
    },
  });
};

export default CustomHeader;
